# CommonJS Modules

> Source: https://nodejs.org/docs/latest/api/modules.html

In the Node.js module system, each file is treated as a separate module. For example, consider a file named `foo.js`:

```js
const circle = require('./circle.js')

console.log(`The area of a circle of radius 4 is ${circle.area(4)}`)

```

On the first line, `foo.js` loads the module `circle.js` that is in the same directory as foo.js.

Here are the contents of `circle.js`:

```js
const { PI } = Math

exports.area = function(r) {
  return PI * r ** 2
}

exports.circumference = function(r) {
  return 2 * PI * r
}
```

The module `circle.js` has exported the functions `area()` and `circumference()`. Functions and objects are added to the root of a module by specifying additional properties on the special exports object.

Variables local to the module will be private, because the module is wrapped in a function by Node.js (see module wrapper). In this example, the variable PI is private to `circle.js`.

The module.exports property can be assigned a new value (such as a function or object).

Below, `bar.js` makes use of the `square` module, which exports a Square class:

```js
const Square = require('./square.js')
const mySquare = new Square(2)
console.log(`The area of mySquare is ${mySquare.area()}`)

```

The square module is defined in `square.js`:

```js
// Assigning to exports will not modify module, must use module.exports
module.exports = class Square {
  constructor(width) {
    this.width = width
  }

  area() {
    return this.width ** 2
  }
};

```

The module system is implemented in the `require('module')` module.

## Other example

File: `lib/pressure-converter.js`

```js
const PsiBarRatio = 0.0689476

class PressureConverter {
    barToPsi(value) {
        return value / PsiBarRatio
    }

    psiToBar(value) {
        return value * PsiBarRatio
    }
}

module.exports = PressureConverter
```

File: `index.js`

```js
const PressureConverter = require('./lib/pressure-converter')

const pc = new PressureConverter()

const pressure = pc.barToPsi(1)
const pressure2 = pc.psiToBar(14)

console.log(`1 bar = ${pressure} psi`)
console.log(`14 psi = ${pressure2} bar`)
```
