
# ES6 Modules

```js
export default class PressureConverter {...}
```

```js
import PressureConverter from './lib/pressure-converter'
```


```js
const PsiBarRatio = 0.0689476

export default class PressureConverter {
  barToPsi(value) {
    return value / PsiBarRatio
  }

  psiToBar(value) {
    return value * PsiBarRatio
  }
}
```

```js
import PressureConverter from './lib/pressure-converter'

const pc = new PressureConverter()

const pressure = pc.barToPsi(1)
const pressure2 = pc.psiToBar(14)

console.log(`1 bar = ${pressure} psi`)
console.log(`14 psi = ${pressure2} bar`)
```


```json
  "babel": {
    "presets": [
      [ "@babel/preset-env", { "modules": "commonjs" } ]
    ]
  }
```

```
npx babel-node .\src\index.js
```

<!-- ```bash
npm install --save-dev @babel/preset-env
```

```bash
npm install --save-dev @babel/core @babel/cli
```

```bash
npm install --save-dev @babel/core @babel/node
``` -->


https://babeljs.io/docs/en/babel-preset-env

https://babeljs.io/docs/en/babel-cli

https://babeljs.io/docs/en/next/babel-node.html

## Default Exports

```js
const PsiBarRatio = 0.0689476

export default class PressureConverter {
  barToPsi(value) {
    return value / PsiBarRatio
  }

  psiToBar(value) {
    return value * PsiBarRatio
  }
}
```

```js
import PressureConverter from './lib/pressure-converter'

const pc = new PressureConverter()

const pressure = pc.barToPsi(1)
const pressure2 = pc.psiToBar(14)

console.log(`1 bar = ${pressure} psi`)
console.log(`14 psi = ${pressure2} bar`)
```

## Multiple Exports

```js
export default const PsiBarRatio = 0.0689476

export barToPsi(value) {
  return value / PsiBarRatio
}

export psiToBar(value) {
  return value * PsiBarRatio
}

```

```js
import PsiBarRatio, { barToPsi, psiToBar } from './lib/pressure-converter'

const pressure = barToPsi(1)
const pressure2 = psiToBar(14)

console.log(`1 bar = ${pressure} psi`)
console.log(`14 psi = ${pressure2} bar`)
console.log(`The ratio between psi and bar is ${PsiBarRatio}`)
```

## Import Alias

```js
import { barToPsi as btp, psiToBar as ptb } from './lib/pressure-converter'

const pressure = barToPsi(1)
const pressure2 = psiToBar(14)

console.log(`1 bar = ${pressure} psi`)
console.log(`14 psi = ${pressure2} bar`)
```
