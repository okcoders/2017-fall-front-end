// tests provide confidence in our code, give us a protective shell as we modify
// and add new features, and are a form of documentation for others wanting to
// use our programs/functions

// also, they can be very helpful as we code

function sumOfSquares(start, end) {
  if (start >= end) throw `range you specified is no good, ${start} is greater than ${end}`
  if (typeof start !== 'number' || typeof end !== 'number') throw "cmon"
  function go(total, next) {
    if (next === end) {
      return total + next * next
    } else {
      return go(total + next * next, next + 1)
    }
  }

  return go(0, start)
}


describe("sumOfSquares", () => {
  it("should calculate the sum of the squares in the provided range", () => {
    expect(sumOfSquares(1, 4)).toEqual(30)
  })

  it("should handle a bad range", () => {
    function badRangeSum() {
      sumOfSquares(4, 1)
    }
    expect(badRangeSum).toThrow("range you specified is no good, 4 is greater than 1")
  })

  it("should handle invalid types passed in", () => {
    function badTypesSum() {
      sumOfSquares(undefined, {})
    }
    expect(badTypesSum).toThrow("cmon")
  })
})
