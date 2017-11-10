

function sumOfSquares(start, end) {
  if(start >= end) {
    throw `bad range, ${start} is greater than ${end}`
  }

  if(typeof start !== 'number' || typeof end !== 'number') {
    throw "woops"
  }
  function go(total, next) {
    if(next === end) {
      return total + next * next
    } else {
      return go(total + next * next, next + 1)
    }
  }

  return go(0, start)
}

describe("sumOfSquares()", () => {

  it("should sum the squares of numbers in a range", () => {
    expect(sumOfSquares(1, 4)).toEqual(30)
    sumOfSquares(1, 100000)
  })

  it("handle when given an invalid range", () => {
    function willThrowSumOfSquares() {
      sumOfSquares(4, 1)
    }
    expect(willThrowSumOfSquares).toThrow("bad range, 4 is greater than 1")
  })

  it("handle when given non numbers", () => {
    function willThrowSumOfSquares() {
      sumOfSquares(undefined, {})
    }
    expect(willThrowSumOfSquares).toThrow("woops")
  })
})
