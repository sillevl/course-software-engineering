# Arrow Functions

An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the `this`, `arguments`, `super`, or `new.target` keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.

Arrow functions can be used in most cases. They provide just a shorter syntax. You can omit the `function` keyword. In return you add an `=>` symbol after the argument list. This explains why the are called `arrow` functions.

Regular function syntax:

```js
const sayHello = function(name) {
  return `Hello ${name}!`
}
```

Arrow function  syntax:

```js
const sayHello = (name) => {
  return `Hello ${name}!`
}
```

::: tip Arrow function syntax
The `function` keyword is omitted, and instead an `=>` is inserted after the argument list
:::

## Even Shorter

Whenever you only have a single expression inside the arrow function body, you can omit the `{}` brackets as well. The statement is also returned by default. Resulting in an even shorter syntax.

```js
const sayHello = (name) => `Hello ${name}!`
```

## Arrow Function Arguments

If an arrow function provides any arguments, they can be listed between the () parentheses.

When there is only one argument, the parentheses even become optional:

```js
const sayHello = name => `Hello ${name}!`
```

When no arguments are needed, an empty pair of parentheses is used:

```js
const sayHello = () => `Hello World!`
```

## Functions as Function Arugments

Arrow functions are extremely useful when you need to use functions as arguments.

```js
waitForResult()
.then( result => console.log(result) )
```

this equals to

```js
waitForResult()
.then( function(result) {
  console.log(result)
})
```
