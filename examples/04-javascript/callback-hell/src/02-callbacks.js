

function timeConsumingOperation(callback) {
  setTimeout( () => {
    if (callback && typeof callback === 'function') {
      callback()
    }
  }, 2000)
}

function anOtherTimeConsumingOperation(callback) {
  setTimeout( () => {
    if (callback && typeof callback === 'function') {
      callback()
    }
  }, 1000)
}

console.log('-- start --')
timeConsumingOperation( function() {
  // console.log('timeConsumingOperation() done!')
  anOtherTimeConsumingOperation(function() {
    // console.log('anOtherTimeConsumingOperation() done!')
    timeConsumingOperation( function() {
      // console.log('timeConsumingOperation() done!');
      anOtherTimeConsumingOperation(function() {
        // console.log('anOtherTimeConsumingOperation() done!')
        console.log('-- done --')
      });
    });
  });
});
