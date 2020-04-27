# Managing Dependencies

Object-oriented languages are efficient and effective because they model reality. Objects reflect real world problems and the interactions between those objects provide solutions. A single object cannot know everything, so it will have to talk to other objects.

For any desired behavior, an object knows it personally, inherits it, or knows another object who knows it. The previous chapter concerned itself with the behavior a class should implement personally. Behavior through inheritance is covered in one of the next chapters. This chapter will focus on getting access to behavior that is implemented in _other_ objects. 

Well build objects have a single responsibility. To solve complex tasks it is required that they work together. To collaborate, objects must know things about others. _Knowing_ creates dependencies. If not managed, dependencies will strangle your application.

## Understanding Dependencies

An object depends on another object if, when one object changes, the other might be forced to change in turn.

Here is a modified version of the `Gear` class. `Gear` is initialized with four familiar arguments. The `gear_inches` method uses both the `rim`and `tire` to create a new instance of `Wheel`. `Wheel` has not changed since the previous example.

```typescript
class Wheel {
  constructor(private _rim: number, private _tire: number) { }
  public get rim() { return this._rim }
  public get tire() { return this._tire }

  public get diameter() {
    return this.rim + (this.tire * 2)
  }
}

class Gear {
  
  constructor(
    private _chainring: number,
    private _cog: number,
    private _rim: number,
    private _tire: number
  ) { }

  private get chainring() { return this._chainring }
  private get cog() { return this._cog }
  private get rim() { return this._rim }
  private get tire() { return this._tire }

  public get ratio() {
    return this.chainring / this.cog
  }

  public get gear_inches() {
    return this.ratio * new Wheel(this.rim, this.tire).diameter
  }
}

console.log(new Gear(52, 11, 26, 1.5).gear_inches)
```

The code seems innocent, but it's a lot more complex than it looks. `Gear` has at least 4 dependencies on `Wheel`. Most of these dependencies are unnecessary. `Gear` does not need these dependencies to do the job. These dependencies resist change in the `Gear` implementation.

### Recognizing Dependencies

An object has dependencies when it knows

* The name of another class. `Gear`expects a class named `Wheel` to exist.
* The name of a message that it intends to send to some other than self. `Gear` expects a `Wheel` instance to respond to `diameter`.
* The arguments that a message requires. `Gear`knows that `new Wheel` requires a `rim` and a `tire`.
* The order of those arguments. `Gear` knows the first argument to `new Wheel` should be `rim`, the second, `tire`.

Each dependency creates a chance that `Gear` will be forced to change because of a change to `Wheel`. Some dependencies must exist, because they _must_ collaborate, but most dependencies listed above are unnecessary.
Dependencies make code less _reasonable_. The challenge is to manage dependencies so that each class has the fewest possible. A class should just know enough to do its job and nothing more.

### Coupling Between Objects (CBO)

Dependencies _couple_ `Gear` and `Wheel`. The more they know about each other and the more coupled they are. The more coupled two objects are,  the more they behave like a single entity.

* If you change `Wheel` it may be necessary to make changes to `Gear` as well.
* If you want to reuse `Gear`, `Wheel` comes along for the ride.
* When you test `Gear` you will be testing `Wheel`too.

![Code coupling](./img/coupling.jpeg)

If two or more objects are tightly coupled, they behave as a unit. It becomes impossible to reuse just one.

### Other Dependencies

This chapter covers the four kinds of dependencies listed above and suggests techniques for avoiding the problems they create. However other kinds of dependencies exist. They types will be covered in other chapters.

One especially destructive kind of dependency occurs where an object knows another who knows another who knows something. Many messages are chained together to reach behavior that lives in a distant object. Message chaining created dependencies between the original object and every other object in the chain.
This is a violation of the [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter) (covered later).

Another type of dependencies is that of tests on code. Tests that are closely coupled to code lead to frustration. These test will break every time code is refactored. 

## Writing Loosely Coupled Code

Reducing dependencies means recognizing and removing the ones you don't need. Some examples will be illustrated to reduce dependencies by decoupling code.

### Injecting Dependencies

Referring to another class by its name creates a dependency. In the last version of `Gear`, the `gear_inches` method contains an explicit reference to the class `Wheel`:

```typescript
class Gear {
  constructor(
    private _chainring: number,
    private _cog: number,
    private _rim: number,
    private _tire: number
  ) { }

  private get chainring() { return this._chainring }
  private get cog() { return this._cog }
  private get rim() { return this._rim }
  private get tire() { return this._tire }

  public get gear_inches() {
    return this.ratio * new Wheel(this.rim, this.tire).diameter
  }
  
  // ...
}

console.log(new Gear(52, 11, 26, 1.5).gear_inches)
```

If the `Wheel` class changes its name, the `Gear` class needs to change as well. A deeper problem exits that is far less visible but more destructive.

When `Gear` hard-codes a reference to `Wheel` deep inside its `gear_inches` method, it is explicitly declaring that its only willing to calculate  gear inches for instances of `Wheel`. `Gear` refuses to collaborate with any other kind of object, even if that object has a diameter and uses gears.

The code above uses an unjustified attachment to static types. It is not the class of the object that is important, it is the _message_ you plan to send it. `Gear` needs access to an object that can respond to `diameter`. `Gear` does not care and should not know about the class of the object. `Gear` does not need to know about the `Wheel` class to calculate `gear_inches`. It does not need to know that a `Wheel` expects to be initialized with a `rim` and then a `tire`. It just needs an object that knows `diameter`.

Instead of being coupled to a `Wheel` we change to code so that `Gear` expects to be initialized with an object that can respond to `diameter`:

```typescript
class Gear {
  constructor(
    private _chainring: number,
    private _cog: number,
    private _wheel: Wheel
  ) { }

  private get wheel() { return this._wheel }

  public get gear_inches() {
    return this.ratio * this.wheel.diameter
  }

  // ...
}

console.log(new Gear(52, 11, new Wheel(26, 1.5)).gear_inches)
```

The change is so small, but coding in this style has huge benefits. Moving the creation of the new `Wheel` instance outside the `Gear` class decouples the two classes. `Gear` can now collaborate with any object that is of type `Wheel` (any Wheel object or inherited type).

This technique is known as _dependency injection_. `Gear` previously had explicit dependencies on the `Wheel` class and on the type and order of its initialization arguments. By using injecting the dependencies are reduced to a single dependency on the `diameter` method. `Gear` is now smarter because it knows less.

### Isolate Dependencies

It is best to break all dependencies. This is always _technically_ possible, but sometimes not _actually_ possible. When working with existing code, it is mostly constrained how much you can change.

If it is impossible to remove unnecessary dependencies, you should isolate them within your class. Isolating dependencies makes them easy to spot and reduce when circumstances permit.

#### Isolate Instance Creation

If you cannot change the code to inject a `Wheel` into a `Gear`, you should isolate the creation of a new `Wheel` inside the `Gear` class. The intent is to explicitly expose the dependency while reducing its reach into your class. The next example show this idea:

```typescript
class Gear {
  private _wheel: Wheel
  
  constructor(
    private _chainring: number,
    private _cog: number,
    rim: number,
    tire: number
  ) {
    this._wheel = new Wheel(rim, tire)
  }

  private get wheel() { return this._wheel }

  public get gear_inches() {
    return this.ratio * this.wheel.diameter
  }

  // ...
}
```

Creation of the `Wheel` has been moved from the `gear_inches` method to the initialization method. This cleans up the `gear_inches` method. Note that this technique unconditionally creates a new `Wheel` each time a new `Gear` is created.

The next alternative isolates creation of a new `Wheel` in its own explicitly defined `wheel` method. This method lazy creates a new instance of `Wheel`. The creation of a `Wheel` is deferred until `gear_inches` invokes the new `wheel` method.


```typescript
class Gear {
  private _wheel?: Wheel
  constructor(
    private _chainring: number,
    private _cog: number,
    private _rim: number,
    private _tire: number
  ) { }

  private get wheel() {
    if( !this._wheel) {
      this._wheel = new Wheel(this.rim, this.tire)
    }
    return this._wheel
  }

  public get gear_inches() {
    return this.ratio * this.wheel.diameter
  }

  // ...
}
```

In both cases `Gear` still knows far too much. It still takes `rim` and `tire` as initialization arguments and it still creates its own instance of `Wheel`. `Gear` is still stuck to a `Wheel`. It can only calculate gear inches of no other kind of object.

However there _has_ been an improvement. The number of dependencies in `gear_inches` has been reduced. This coding style reveals dependencies instead of concealing them. This lowers the barriers to reuse and making the code easier to refactor when needed. This change makes the code more agile, and will adapt more easily to the unknown future.

#### Isolate Vulnerable External Messages

Now that we isolated references to external class names, it is time to take a look at external _messages_ that are sent to someone other than `this`. For example `gear_inches`sends `ratio` and `wheel` to `this`, but sends `diameter` to `wheel`.

```typescript
public get gear_inches() {
  return this.ratio * this.wheel.diameter
}
```

This example is fine. Gear's only reference to `wheel.diameter` is in this method. But imagine the code was more complex and calculating gear inches required a lot more math and look something like this:

```typescript
public get gear_inches() {
  // ... a few lines of scary math
  foo = some_intermediate_result * this.wheel.diameter
  // ... more lines of scary math
}
```

Now `wheel.diameter` is embedded deeply inside a complex method. Embedding the external dependency deep inside `gear_inches` is unnecessary and increases its vulnerability. You can reduce the chance of being forced to change `gear_inches` by removing its external dependency and encapsulating it in a method of its own:

```typescript
public get gear_inches() {
  // ... a few lines of scary math
  foo = some_intermediate_result * this.diameter
  // ... more lines of scary math
}

public get diameter() {
  return this.wheel.diameter
}
```

This is exactly what you would have written if you had many references to `wheel.diameter` throughout `Gear` and you wanted it DRY. After this change, `gear_inches` is more abstract. `Gear` now isolates `wheel.diameter` in a separate method and `gear_inches` can depend on a message sent to `this`.

### Remove Argument-Order Dependencies

Sending a message requires arguments. The sender must have any knowledge of those arguments. This dependency is unavoidable. However there is also a more subtle dependency. Not only does the sender need to provide arguments, it must also know the specific and fixed order.

In the following example, the `Gear`'s `initialize` method takes three arguments: `chainring`, `cog` and `wheel`. It provides no defaults and all the arguments must be passed and _in the correct order_.

```typescript
class Gear {
  constructor(
    private _chainring: number,
    private _cog: number,
    private _wheel: Wheel,
  ) { }

  // ...
}

new Gear(
  52,
  11,
  new Wheel(26, 1.5)
).gear_inches
```

The senders of `new` depend on the order of the arguments as they are specified in `Gear`'s `constructor` method. If that order changes, all the senders will be forced to change.

#### Use Hashes for Initialization Arguments

There is a simple way to avoid depending on fixed-order arguments. Instead of a fixed list of parameters  you could take a hash of options instead.

The next example shows a version of this simple technique.

```typescript
class Gear {
  private _chainring: number
  private _cog: number
  private _wheel: Wheel

  constructor( args: { chainring: number, cog: number, wheel: Wheel } ) {
    this._chainring = args.chainring
    this._cog = args.cog
    this._wheel = args.wheel
  }

  // ...
}

new Gear( {
  chainring: 52,
  cog: 11,
  wheel: new Wheel(26, 1.5)
}
).gear_inches
```

The `constructor` method now takes just one argument `args`, a object that contains all of the inputs. The `constructor` method is changed to extract its arguments from this object.

This technique has several advantages. First it will remove the dependency on the argument order. `Gear` is now free to add or remove initialization arguments and defaults. Now changes can be made with the knowledge that no changes will have side effects in other code.

Note that both techniques in many cases can be combined. That is, a few fixed-order arguments, followed by an options object.

#### Explicitly Define Defaults

There are many techniques for adding defaults. Simple non-boolean defaults can be specified using the `||` method as in next example.

```typescript
  // specifying defaults using ||
  constructor( args: { chainring: number, cog: number, wheel: Wheel } ) {
    this._chainring = args.chainring || 40
    this._cog = args.cog || 18
    this._wheel = args.wheel
  }
```

This is a common technique but should be used with caution. The `||` acts as an `or` condition. If the left-hand expression returns `false` , `undefined` or `null` it proceeds to evaluate and returns the right-hand expression. In the case where `args` contains `boolean_thing` key that defaults to true, it makes it impossible for the caller to ever set the final variable toe `false`, `undefined` or `null`.

```ruby
this.bool = args.boolean_thing] || true
```

It is better to use the `fetch` method to set defaults. The `fetch` method _expects_ the key you are fetching to be in the hash and supplies options for handling missing keys.

In the example below `fetch` is used to set `@chainring` to the default of 40, only if the `:chainring` key is not in the `args` hash.

```typescript
  // specifying defaults using an object
  constructor( { chainring = 40, cog = 18, wheel }: { chainring?: number, cog?: number, wheel: Wheel } ) {
    this._chainring = chainring
    this._cog = cog
    this._wheel = wheel
  }
```

Cleaning it up a bit with an interface:

```typescript

interface GearOptions { chainring?: number, cog?: number, wheel: Wheel }

class Gear{
  constructor( {chainring = 40, cog = 18, wheel }: GearOptions ) {
    this._chainring = chainring
    this._cog = cog
    this._wheel = wheel
  }
// ...
```

#### Isolate Multiparameter Initialization

Until now all techniques for removing the argument order dependency used situation where _you_ have control over the signature of the method that needs to change. In some situation you will be forced to depend on a method that requires fixed-order arguments.

Just as you would DRY out repetitive code inside of a class, you can DRY out creation of new `Gear` instances by creating a single method to wrap the external interface. The classes in the application should depend on code that you own. Using a wrapping method isolates external dependencies.

In the next example the `SomeFramework::Gear` is not owned by the application and is part of an external framework. Its initialization requires fixed-order arguments. The `GearWrapper` module was created to avoid having multiple dependencies on the order of those arguments. `GearWrapper` isolates all knowledge of the external interface in one place. In above it improves the interface of the application.

```typescript
// When Gear is part of an external framework
export class Gear {
  constructor(
    private _chainring: number,
    private _cog: number,
    private wheel: Wheel
  ){ }

  // ...
}

// wrap the interface to protect yourself from changes
import { Gear } from 'someframework'

export class GearFactory {
  public create( {chainring = 40, cog = 18, wheel }: GearOptions) {
    return new Gear(chainring, cog, wheel)
  }
}

// Now you can create a new Gear using an arguments object.
import { GearFactory } from './src/gear' 
GearFactory.create( {
  chainring: 52,
  cog: 11,
  wheel: new Wheel(26, 1.5)
}).gear_inches
```

The other interesting thing about `GearFactory` is that its only purpose is to create instances of some other class. Object-oriented designers have a word for objects like this. They call them _factories_.

## Managing Dependency Direction

Dependencies always have a direction. This section covers on how to decide on the direction of dependencies.

### Reversing Dependencies

Every example this far showed that `Gear` was depending on `Wheel` or `diameter`. The code could also be easily have been written with the direction of dependencies reversed. `Wheel` could instead depend on `Gear` or `ratio`.

The next code shows an example where `Wheel` has been changed to depend on `Gear` and `gear_inches`. `gear_inches` is still responsible for the actual calculation but expects a `diameter` argument to be passed in by the caller.

```typescript
class Gear {
  constructor(
    private _chainring: number,
    private _cog: number
  ) { }

  private get chainring() { return this._chainring }
  private get cog() { return this._cog }

  public get ratio() {
    return this.chainring / this.cog
  }

  public gear_inches(diameter: number) {
    return this.ratio * diameter
  }
}

class Wheel {
  private _gear: Gear

  constructor(
    private _rim: number,
    private _tire: number,
    chainring: number,
    cog: number
  ) {
    this._gear = new Gear(chainring, cog)
  }

  public get rim() { return this._rim }
  public get tire() { return this._tire }
  public get gear() { return this._gear }

  public get diameter() {
    return this.rim + (this.tire * 2)
  }

  public get gear_inches() {
    return this.gear.gear_inches
  }
}

console.log(new Wheel(26, 1.5, 52, 11).gear_inches)
```

Calculating `gear_inches` still requires collaboration between `Gear` and `Wheel` and the result of the calculation is unaffected by the reversal. You could infer that the direction of the dependency does not matter. That it makes no difference whether `Gear` depends on `Wheel` or vice versa.

This might be true in an application that never changes. However your application _will_ change. The choices about the direction of dependencies have repercussions. If you get it right, the application will be pleasant to work on and easy to maintain. If you get it wrong then dependencies will gradually take over the application and will become harder and harder to change.

### Choosing Dependency Direction

Pretend that classes are people. If you would give people advice about how to behave you would tell them to 

> Depend on things that change less often then you do

In this statement lies the idea which i based on three simple truths about code:

* Some classes are more likely than others to have changes in requirements.
* Concrete classes are more likely to change than abstract classes.
* Changing a class that has many dependents will result in widespread consequences.

There are ways in which these truths intersect but each is a separate and distinct notion.

#### Understanding Likelihood of Change

The idea that some classes are more likely to change than others applies not only on code that you write for your application, but also to code that you use but did _not_ write. The Ruby base classes and other framework code that you rely on both have their own inherent likelihood of change.

Fortunately Ruby base classes change less often than your own code. It makes perfectly sense to depend on the `*`method as `gear_inches` does. Or to expect that `String` and `Array` will continue to work as they always have.

Framework classes are another story. Any framework you use will be more stable than the code you write, but it certainly is possible that code changes in rapidly developed projects.

Every class in your project can be ranks along a scale of how likely it is to undergo a change relative to all the other classes. This ranking is one key piece of information when choosing the direction of dependencies.

#### Recognizing Concretions and Abstractions

The second idea concerns itself with the concreteness and abstractness of code. The term _abstract_ here is used as in "disassociated from any specific instance".

This concept was illustrated earlier. `Gear` depended on `Wheel` and on `new Wheel` and on `new Wheel(rim, tire)`, it depended on concrete code. After the code was altered to inject a `Wheel` into `Gear`, `Gear` suddenly began to depend on something far more abstract. It had access to an object that could respond to the `diameter` message.

This technique and transition might be for granted in Ruby. If you have been required to accomplish this in a statically typed language, this could not be done in the same manner. Statically typed language have compilers that test types and you would not be able to inject any random object into `Gear`. Instead you would have to declare an _interface_, define a `diameter` as part of that interface. Including the interface in the `Wheel` class, and tell `Gear` that the class you are injecting is _a kind of_ that interface.

In Ruby you just inject `Wheel` into `Gear` such that `Gear` depends on a `Duck` who responds to `diameter`. In this case you are casually defining an interface. In static typed languages defining an interface is _always_ intentional.

The wonderful thing about abstractions is that they represent common, stable qualities. They are less likely to change than concrete classes. Depending on abstractions is always better than on concretions.

#### Avoiding Dependent-Laden Classes

The consequences of changing a dependent-laden class are obvious. A class that, if changed, will cause changes to ripple through the application, will be under enormous pressure to _never_ change. Your application may be permanently handicapped by your reluctance to pay the price required to make a change to this class.

#### Finding the Dependencies That Matter

Classes vary in their likelihood of change, their level of abstraction, and their number of dependents. They all matter, but the interesting design decisions occur at the place where _likelihood of change_ intersects with _number of dependents_.

![Change vs dependents](./img/change-vs-dependents.jpeg)

The danger zone is where _concrete_ classes have many dependencies, and you believe it is unlikely to change. These classes represent danger to the future health of the application. These classes are the classes that make an application painful to change.

_Depend on things that change less often than you do_ is a simple rule of thumb that when following will evolve a healthy design in your application.

## Summary

Dependency management is core to creating future-proof applications. Injection dependencies creates loosely coupled objects that can be reused in new ways. Isolating dependencies allow objects to quickly adapt to unexpected changes. Depending on abstractions decreases the likelihood of facing these changes.
The key to manage dependencies is to control their direction. It is best that classes depend on things that change less often than they do.
