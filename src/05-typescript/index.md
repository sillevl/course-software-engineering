# TypeScript

> source: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

Try out TypeScript in your browser: https://www.typescriptlang.org/play/

## Installing TypeScript

There are two main ways to get the TypeScript tools:

- Via npm (the Node.js package manager)
- By installing TypeScript’s Visual Studio plugins

For NPM users:


```js
> npm install -g typescript
```

## Building Your First TypeScript Program

In your editor, type the following JavaScript code in `greeter.ts`:

```typescript
function greeter(person) {
    return `Hello, ${person}`
}

const user = 'Jane User'

console.log( greeter(user) )
```

## Compile Your Code

We used a `.ts` extension, but this code is just JavaScript. You could have copy/pasted this straight out of an existing JavaScript app.

At the command line, run the TypeScript compiler:

```bash
tsc greeter.ts

```

The result will be a file `greeter.js` which contains the same JavaScript that you fed in. We’re up and running using TypeScript in our JavaScript app!

Now we can start taking advantage of some of the new tools TypeScript offers. Add a `: string` type annotation to the 'name' function argument as shown here:

```typescript
function greeter(person: string) {
    return `Hello, ${person}`
}

const user = 'Jane User'

console.log( greeter(user) )
```

## Type Annotations

Type annotations in TypeScript are lightweight ways to record the intended contract of the function or variable. In this case, we intend the greeter function to be called with a single string parameter. We can try changing the call greeter to pass an array instead:

```typescript
function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}

const user = [0, 1, 2]

console.log( greeter(user) )
```

Re-compiling, you’ll now see an error:

```text
error TS2345: Argument of type 'number[]' is not assignable to 
parameter of type 'string'.
```

Similarly, try removing all the arguments to the greeter call. TypeScript will let you know that you have called this function with an unexpected number of parameters. In both cases, TypeScript can offer static analysis based on both the structure of your code, and the type annotations you provide.

Notice that although there were errors, the `greeter.js` file is still created. You can use TypeScript even if there are errors in your code. But in this case, TypeScript is warning that your code will likely not run as expected.

## Interfaces

Let’s develop our sample further. Here we use an interface that describes objects that have a firstName and lastName field. In TypeScript, two types are compatible if their internal structure is compatible. This allows us to implement an interface just by having the shape the interface requires, without an explicit `implements` clause.

```typescript
interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}

const user = { firstName: 'Jane', lastName: 'User' }

console.log( greeter(user) )
```

## Classes

Finally, let’s extend the example one last time with classes. TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.

Here we’re going to create a `Student` class with a constructor and a few public fields. Notice that classes and interfaces play well together, letting the programmer decide on the right level of abstraction.

Also of note, the use of `public` on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.

```typescript
class Student {
    fullName: string
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}

const user = new Student('Jane', 'M.', 'User')

console.log( greeter(user) )
```

Re-run `tsc greeter.ts` and you’ll see the generated JavaScript is the same as the earlier code. Classes in TypeScript are just a shorthand for the same prototype-based OO that is frequently used in JavaScript.
