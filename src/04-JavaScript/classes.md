# JavaScript Classes

> Source: https://www.w3schools.com/js/js_classes.asp

ES6, also known as ECMAScript2015, introduced classes.

A class is a type of function, but instead of using the keyword `function` to initiate it, we use the keyword `class`, and the properties are assigned inside a `constructor()` method.

## Class Definition

Use the keyword class to create a `class`, and always add the `constructor()` method.

The constructor method is called each time the class object is initialized.

Example:

A simple class definition for a class named "Car":

```js
class Car {
  constructor(brand) {
    this.carname = brand
  }
}
```

Now you can create objects using the Car class:

```js
class Car {
  constructor(brand) {
    this.carname = brand
  }
}
const mycar = new Car('Ford')
```

## Methods

The constructor method is special, it is where you initialize properties, it is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an _invisible and empty_ constructor method.

You are also free to make your own methods, the syntax should be familiar:

Example

Create a method named `present`:

```js
class Car {
  constructor(brand) {
    this.carname = brand
  }
  present() {
    return `I have a ${this.carname}`
  }
}

const mycar = new Car('Ford')

console.log( mycar.present() )
```

As you can see in the example above, you call the method by referring to the object's method name followed by parentheses (any parameters would go inside the parentheses).

Example

Send a parameter to the `present()` method:

```js
class Car {
  constructor(brand) {
    this.carname = brand
  }
  present(introduction) {
    return `${introduction}, I have a ${this.carname}`
  }
}

const mycar = new Car('Ford')

coonsole.log( mycar.present('Hello') )
```

## Static Methods

Static methods are defined on the class itself, and not on the prototype.

That means you cannot call a static method on the object (mycar), but on the class (Car):

```js
 class Car {
  constructor(brand) {
    this.carname = brand
  }
  static hello() {
    return 'Hello!!'
  }
}

mycar = new Car('Ford')

//Call 'hello()' on the class Car:
console.log( Car.hello() )

//and NOT on the 'mycar' object:
//console.log(mycar.hello())
//this would raise an error.
```

If you want to use the mycar object inside the static method, you can send it as a parameter:

```js
class Car {
  constructor(brand) {
    this.carname = brand
  }
  static hello(car) {
    return `Hello ${car.carname}`
  }
}

const mycar = new Car('Ford')

console.log( Car.hello(mycar) )
```

## Inheritance

To create a class inheritance, use the `extends` keyword.

A class created with a class inheritance inherits all the methods from another class:

```js
class Car {
  constructor(brand) {
    this.carname = brand
  }
  present() {
    return `I have a ${this.carname}`
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand)
    this.model = model
  }
  show() {
    return `${this.present()} , it is a ${this.model}`
  }
}

const mycar = new Model('Ford', 'Mustang')
console.log( mycar.show() )
```

The `super()` method refers to the parent class.

By calling the `super()` method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

> Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

## Getters and Setters

Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the `get` and `set` keywords.

Example

Create a getter and a setter for the "carname" property:

```js
class Car {
  constructor(brand) {
    this.carname = brand
  }
  get name() {
    return this.carname;
  }
  set name(name) {
    this.carname = name;
  }
}

const mycar = new Car('Ford');

console.log( mycar.name )
```

::: tip No parentheses
even if the getter is a method, you do not use parentheses when you want to get the property value.
:::

The name of the getter/setter method cannot be the same as the name of the property, in this case `carname`.

Many programmers use an underscore character `_` before the property name to separate the getter/setter from the actual property:

Example

You can use the underscore character to separate the getter/setter from the actual property:

```js
class Car {
  constructor(brand) {
    this._carname = brand
  }
  get carname() {
    return this._carname
  }
  set carname(name) {
    this._carname = name
  }
}

const mycar = new Car('Ford')

console.log( mycar.carname )
```

To use a setter, use the same syntax as when you set a property value, without parentheses:

Example

Use a setter to change the carname to "Volvo":

```js
class Car {
  constructor(brand) {
    this._carname = brand
  }
  get carname() {
    return this._carname
  }
  set carname(name) {
    this._carname = name;
  }
}

const mycar = new Car('Ford')
mycar.carname = 'Volvo'
console.log( mycar.carname) 
```