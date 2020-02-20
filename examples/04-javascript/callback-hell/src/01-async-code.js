

function timeConsumingOperation() {
  setTimeout( () => {
    console.log('timeConsumingOperation() done!')
  }, 2000)
}

function anOtherTimeConsumingOperation() {
  setTimeout( () => {
    console.log('anOtherTimeConsumingOperation() done!')
  }, 1000)
}

console.log('-- start --')
timeConsumingOperation()
anOtherTimeConsumingOperation()
console.log('-- done --')