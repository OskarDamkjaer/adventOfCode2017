const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');

const partOne = function(arg) {
  const path  = arg.trim().split(',');
  const mymap = new Map();
  mymap.set('nw', 0);
  mymap.set('n', 0);
  mymap.set('ne', 0);
  mymap.set('sw', 0);
  mymap.set('s', 0);
  mymap.set('se', 0);

  for (let i = 0; i < path.length; i++) {
    mymap.set(path[i], parseInt(mymap.get(path[i])) + 1);
  }

  const cancelOut = (key, oppositeKey) => {
    let first = mymap.get(key);
    let second = mymap.get(oppositeKey);
    if (first > second) {
      mymap.set(key, first - second);
      mymap.set(oppositeKey, 0);
    } else {
      mymap.set(oppositeKey, second - first);
      mymap.set(key, 0);
    }
  };

  cancelOut('n', 's');
  cancelOut('ne', 'sw');
  cancelOut('nw', 'se');

  const sideCancel = (key, oppositeKey) => {
    let first = mymap.get(key);
    let second = mymap.get(oppositeKey);
    if (first > second) {
      mymap.set(oppositeKey, 0);
    } else {
      mymap.set(key, 0);
    }
  };

  sideCancel('nw', 'ne');
  sideCancel('sw', 'se');
  return Array.from(mymap.values()).reduce((a, b) => a + b, 0);
};

const partTwo = () => {}

module.exports = {partOne, partTwo};
