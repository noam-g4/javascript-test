const { consec, palisub } = require('../src/commonjs')

describe('COMMON JS TEST', () => {
  test('counting consecutive numbers', () => {
    const io = [
      [5, 15],
      [10, 55],
      [0, 0],
      [65, 2145],
      [91, 4186],
    ]

    io.forEach(xy => expect(consec(xy[0])).toBe(xy[1]))
  })

  test('checking palindromes in substrings', () => {
    const io = [
      ['coolracecaritis', 'racecar'],
      ['abcdefgfeabcd', 'efgfe'],
      ['this string does not contain a palindromatic substring', ''],
      ['a whole new level for abcde i', 'level'],
      ['good job wow well done', 'wow'],
    ]

    io.forEach(xy => expect(palisub(xy[0])).toBe(xy[1]))
  })
})
