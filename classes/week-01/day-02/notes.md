## day 2 exercise

Calculating sum of a range in javascript, traditional, and recursive

function sumOfRange(start, end) {
  function go(total, current) {
    if (current === start) {
      return total + start
    } else {
      return go(total + current, current - 1)
    }
  }
  return go(0, end)
}

console.log(sumOfRange(1, 10))

function sumOfRange(start, end) {
  var total = 0
  for(var i = start; i <= end; i++) {
    total += i
  }
  console.log(total)
}

sumOfRange(1, 10)
