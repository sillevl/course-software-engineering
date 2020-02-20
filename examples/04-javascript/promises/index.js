

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

console.log('-- start --')
timeConsumingOperation()
.then( () => anOtherTimeConsumingOperation() )
.then( () => timeConsumingOperation() )
.then( () => anOtherTimeConsumingOperation() )
.then( () => console.log('-- done --'))
