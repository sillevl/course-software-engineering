# Async Await

```js
(async () => {
  console.log('-- start --')
  await timeConsumingOperation()
  await anOtherTimeConsumingOperation()
  await timeConsumingOperation()
  await anOtherTimeConsumingOperation()
  console.log('-- done --')
})()
```


```js
function timeConsumingOperation() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log('timeConsumingOperation() done!')
      resolve()
    }, 2000)
  })
}

function anOtherTimeConsumingOperation() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log('anOtherTimeConsumingOperation() done!')
      resolve()
    }, 1000)
  })
}
```

