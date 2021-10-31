const { consec } = require('../src/commonjs')

describe('COMMON JS TEST', () => {
  test('counting consecutive numbers', () => {
    const io = [
      [5, 15],
      [10, 55],
      [0, 0],
      [65, 2145],
      [91, 4168],
    ]

    io.forEach(xy => expect(consec(xy[0])).toBe(xy[1]))
  })
})
