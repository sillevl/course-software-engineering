# Managing Dependencies

Object-oriented languages are efficient and effective because the model reality. Objects reflect real world problems and the interactions between those objects provide solutions. A single object cannot know everything, so it will have to talk to other objects.

For any desired behavior, an object knows it personally, inherits it, or knows another object who knows it. The previous chapter concerned itself with the behavior a class should implement personally. Behavior through inheritance is covered in one of the next chapters. This chapter will focus on getting access to behavior that is implemented in _other_ objects. 

Well build objects have a single responsibility. To solve complex tasks it is required that they work together. Tho collaborate, objects must know things about others. _Knowing_ creates dependencies. If not managed, dependencies will strangle your application.

## Understanding Dependencies

An object depends on another object if, when one object changes, the other might be forced to change in turn.

Here is a modified version of the `Gear` class. `Gear` is initialized with four familiar arguments. The `gear_inches` method uses both the `rim`and `tire` to create a new instance of `Wheel`. `Wheel` has not changed since the previous example.

```ruby
class Gear
  attr_reader :chainring, :cog, :rim, :tire
  def initialize(chainring, cog, rim, tire)
    @chainring = chainring
    @cog       = cog
    @rim       = rim
    @tire      = tire
  end

  def gear_inches
    ratio * Wheel.new(rim, tire).diameter
  end

  def ratio
    chainring / cog.to_f
  end
# ...
end

class Wheel
  attr_reader :rim, :tire
  def initialize(rim, tire)
    @rim       = rim
    @tire      = tire
  end

  def diameter
    rim + (tire * 2)
  end
# ...
end

Gear.new(52, 11, 26, 1.5).gear_inches
```

The code seems innocent, but it's a lot more complex than it looks. `Gear` has at least 4 dependencies on `Wheel`. Most of these dependencies are unnecessary. `Gear`does not need these dependencies to do the job. These dependencies resist change in the `Gear` implementation.

### Recognizing Dependencies

An object has dependencies when it knows

* The name of another class. `Gear`expects a class named `Wheel` to exist.
* The name of a message that it intends to send to someother than self. `Gear` expects a `Wheel` instance to respond to `diameter`.
* The arguments that a message requires. `Gear`knows that `Wheel.new` requires a `rim` and a `tire`.
* The order of those arguments. `Gear` knows the first argument to `Wheel.new` should be `rim`, the second, `tire`.

Each dependency creates a chance that `Gear` will be forced to change because of a change to `Wheel`. Some dependencies must exist, because they _must_ collaborate, but most dependencies listed above are unnecessary.
Dependencies make code less _reasonable_. The challenge is to manage dependencies so that each class has the fewest possible. A class should just know enough to do its job and nothing more.

### Coupling Between Objects (CBO)

Dependencies _couple_ `Gear` and `Wheel`. The more they know about each other and the more coupled they are. The more coupled two objects are,  the more they behave like a single entity.

* If you change `Wheel` it may be necesarry to make changes to `Gear` as well.
* If you want to reuse `Gear`, `Wheel` comes along for the ride.
* When you test `Gear` you will be testing `Wheel`too.

-- figuur --

If two or more objects are tightly coupled, they behave as a unit. It becomes impossible to reuse just one.

### Other Dependencies

This chapter covers the four kinds of dependencies listed above and suggests techniques for avoiding the problems they create. However other kinds of dependencies exist. They types will be covered in other chapters.

One especially destructive kind of dependency occurs where an object knows another who knows another who knows something. Many messages are chained together to reach behavior that lives in a distant object. Message chaining created dependencies between the original object and every other object in the chain.
This is a violation of the Law of Demeter (covered later).

Another type of dependencies is that of tests on code. Tests that are closely coupled to code lead to frustration. These test will break every time code is refactored. 

## Writing Loosely Coupled Code

Reducing dependencies means recognizing and removing the ones you don't need. Some examples will be illustrated to reduce dependencies by decoupling code.

### Injecting Dependencies

Referring to another class by its name creates a dependency. In the last version of `Gear`, the `gear_inches` method contains an explicit reference to the class `Wheel`:

```ruby
class Gear
  attr_reader :chainring, :cog, :rim, :tire
  def initialize(chainring, cog, rim, tire)
    @chainring = chainring
    @cog       = cog
    @rim       = rim
    @tire      = tire
  end

  def gear_inches
    ratio * Wheel.new(rim, tire).diameter
  end
# ...
end

Gear.new(52, 11, 26, 1.5).gear_inches
```

If the `Wheel` class changes its name, the `Gear` class needs to change as well. A deeper problem exits that is far less visible but more destructive.

When `Gear` hard-codes a reference to `Wheel` deep inside its `gear_inches` method, it is explicitly declaring that its only willing to calculate  gear inches for instances of `Wheel`. `Gear` refuses to collaborate with any other kind of object, even if that object has a diameter and uses gears.

The code above uses an unjustified attachment to static types. It is not the class of the object that is important, it is the _message_ you plan to send it. `Gear` needs access to an object that can respond to `diameter`. `Gear` does not care and should not know about the class of the object. `Gear` does not need to know about the `Wheel` class to calculate `gear_inches`. It doe not need to know that a `Wheel` expects to be initialized with a `rim` and then a `tire`. It just needs an object that knows `diameter`.

Instead of being coupled to a `Wheel` we change to code so that `Gear` expects to be initialized with an object that can respond to `diameter`:

```ruby
class Gear
  attr_reader :chainring, :cog, :wheel
  def initialize(chainring, cog, wheel)
    @chainring = chainring
    @cog       = cog
    @wheel     = wheel
  end

  def gear_inches
    ratio * wheel.diameter
  end
# ...
end

# Gear expects a 'Duck' that knows 'diameter'
Gear.new(52, 11, Wheel.new(26, 1.5)).gear_inches
```

The technique used here is called _duck typing_. If it quacks like a duck, it is a duck. [https://en.wikipedia.org/wiki/Duck_typing ](https://en.wikipedia.org/wiki/Duck_typing)

The change is so small, but coding in this style has huge benifits. Moving the creation of the new `Wheel` instance outside the `Gear` class decouples the two classes. `Gear` can now collaborate with any object that implements `diameter`.

This technique is known as _dependency injection_. `Gear` previously had explicit dependencies on the `Wheel` class and on the type and order of its initialization arguments. By using injecting the dependencies are reduced to a single dependency on the `diameter` method. `Gear` is now smarter because it knows less.

### Isolate Dependencies

It is best to break all dependencies. This is always _technically_ possible, but sometimes not _actually_ possible. When working with existing code, it is mostly constrained how much you can change.

If it is impossible to remove unnecessary dependencies, you should isolate them within your class. Isolating dependencies makes them easy to spot and reduce when circumstances permit.

#### Isolate Instance Creation

If you cannot change the code to inject a `Wheel` into a `Gear`, you should isolate the creation of a new `Wheel` inside the `Gear` class. The intent is to explicitly expose the dependency while reducing its reach into your class. The next example show this idea:

```ruby
class Gear
  attr_reader :chainring, :cog, :rim, :tire, :wheel
  def initialize(chainring, cog, rim, tire)
    @chainring = chainring
    @cog       = cog
    @wheel     = Wheel.new(rim, tire)
  end

  def gear_inches
    ratio * wheel.diameter
  end
# ...
```

Creation of the `Wheel` has been moved from the `gear_inches` method to the initialization method. This cleans up the `gear_inches` method. Note that this technique unconditionally creates a new `Wheel` each time a new `Gear` is created.

The next alternative isolates creation of a new `Wheel` in its own explicitly defined `wheel` method. This method lazy creates a new instance of `Wheel`. The creation of a `Wheel` is deferred until `gear_inches` invokes the new `wheel` method.


```ruby
class Gear
  attr_reader :chainring, :cog, :rim, :tire, :wheel
  def initialize(chainring, cog, rim, tire)
    @chainring = chainring
    @cog       = cog
    @rim       = rim
    @tire      = tire
  end

  def gear_inches
    ratio * wheel.diameter
  end

  def wheel
    @wheel ||= Wheel.new(rim, tire)
  end
# ...
```

In both cases `Gear` still knows far too much. It still takes `rim` and `tire` as initialization arguments and it still creates its own instance of `Wheel`. `Gear` is still stuck to a `Wheel`. It can only calculate gear inches of no other kind of object.

However there _has_ been an improvement. The number of dependencies in `gear_inches` has been reduced. This coding style reveals dependencies instead of concealing them. This lowers the barriers to reuse and making the code easier to refactor when needed. This change makes the code more agile, and will adapt more easily to the unknown future.

#### Isolate Vulnerable External Messages

Now that we isolated references to external class names, it is time to take a look at external _messages_ that are sent to someone other than `self`. For example `gear_inches`sends `ratio` and `wheel` to `self`, but sends `diameter` to `wheel`.

```ruby
def gear_inches
  ratio * wheel.diameter
end
```

This example is fine. Gear's only reference to `wheel.diameter` is in this method. But imagine the code was more complex and calculating gear inches required a lot more math and look something like this:

```ruby
def gear_inches
  #... a few lines of scary math
  foo = some_intermediate_result * wheel.diameter
  #... more lines of scary math
end
```

Now `wheel.diameter` is embedded deeply inside a complex method. Embedding the external dependency deep inside `gear_inches` is unnecessary and increases its vulnerability. You can reduce the chance of being forced to change `gear_inches` by removing its external dependency and encapsulating it in a method of its own:

```ruby
def gear_inches
  #... a few lines of scary math
  foo = some_intermediate_result * diameter
  #... more lines of scary math
end

def diameter
  wheel.diameter
end
```

This is exactly what you would have written if you had many references to `wheel.diameter` throughout `Gear` and you wanted it DRY. After this change, `gear_inches` is more abstract. `Gear` now isolates `wheel.diameter` in a separate method and `gear_inches` can depend on a message sent to `self`.

### Remove Argument-Order Dependencies

Sending a message requires arguments. The sender must have any knowledge of those arguments. This dependency is unavoidable. However there is also a more suble dependency. Not only does the sender need to provide arguments, it must also know the specific and fixed order.

In the following example, the `Gear`'s `initialize` method takes three arguments: `chainring`, `cog` and `wheel`. It provides no defaults and all the arguments must be passed and _in the correct order_

```ruby
class Gear
  attr_reader :chainring, :cog, :wheel
  def initialize(chainring, cog, wheel)
    @chainring = chainring
    @cog       = cog
    @wheel     = wheel
  end
  ...
end

Gear.new(
  52,
  11,
  Wheel.new(26, 1.5)).gear_inches
```

#### Use Hashes for Initialization Arguments

```ruby
class Gear
  attr_reader :chainring, :cog, :wheel
  def initialize(args)
    @chainring = args[:chainring]
    @cog       = args[:cog]
    @wheel     = args[:wheel]
  end
  ...
end

Gear.new(
  :chainring => 52,
  :cog       => 11,
  :wheel     => Wheel.new(26, 1.5)).gear_inches
```

#### Explicitly Define Defaults

```ruby
  # specifying defaults using ||
  def initialize(args)
    @chainring = args[:chainring] || 40
    @cog       = args[:cog]       || 18
    @wheel     = args[:wheel]
  end
```

```ruby
  # specifying defaults using fetch
  def initialize(args)
    @chainring = args.fetch(:chainring, 40)
    @cog       = args.fetch(:cog, 18)
    @wheel     = args[:wheel]
  end
```

```ruby
  # specifying defaults by merging a defaults hash
  def initialize(args)
    args = defaults.merge(args)
    @chainring = args[:chainring]
#   ...
  end

  def defaults
    {:chainring => 40, :cog => 18}
  end
```

#### Isolate Multiparameter Initialization

```ruby
# When Gear is part of an external interface
module SomeFramework
  class Gear
    attr_reader :chainring, :cog, :wheel
    def initialize(chainring, cog, wheel)
      @chainring = chainring
      @cog       = cog
      @wheel     = wheel
    end
  # ...
  end
end

# wrap the interface to protect yourself from changes
module GearWrapper
  def self.gear(args)
    SomeFramework::Gear.new(args[:chainring],
                            args[:cog],
                            args[:wheel])
  end
end

# Now you can create a new Gear using an arguments hash.
GearWrapper.gear(
  :chainring => 52,
  :cog       => 11,
  :wheel     => Wheel.new(26, 1.5)).gear_inches
```

## Managing Dependency Direction


### Reversing Dependencies

```ruby
class Gear
  attr_reader :chainring, :cog
  def initialize(chainring, cog)
    @chainring = chainring
    @cog       = cog
  end

  def gear_inches(diameter)
    ratio * diameter
  end

  def ratio
    chainring / cog.to_f
  end
#  ...
end

class Wheel
  attr_reader :rim, :tire, :gear
  def initialize(rim, tire, chainring, cog)
    @rim       = rim
    @tire      = tire
    @gear      = Gear.new(chainring, cog)
  end

  def diameter
    rim + (tire * 2)
  end

  def gear_inches
    gear.gear_inches(diameter)
  end
#  ...
end

Wheel.new(26, 1.5, 52, 11).gear_inches
```

### Choosing Dependency Direction

#### Understanding Likelihood of Change

#### Recognizing Concretions and Abstractions

#### Avoiding Dependent-Laden Classes

#### Finding the Dependencies That Matter


## Summary


























