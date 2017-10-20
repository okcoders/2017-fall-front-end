const _ = require('lodash')

console.log("up and running with lodash", !!_)

var value = _.capitalize("TEST")
var test1 = [1, 2, 3, 4, 5]
var test2 = [3, 4, 5, 6, 7]
var value = _.union(test1, test2)
var value = _.difference(test1, test2)
var value = _.map(test1, x => x * x)
var value = _.reduce(test1, (total, next) => total + next, 0)

var value = _.chain(test1)
  .map(x => x * x)
  .filter(x => x > 20)
  .sum()
  .value()






console.log(value)


