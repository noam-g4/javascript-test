const { consec, palisub, pipe } = require('../exercises/commonjs')

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
      ['good job, wow well done', 'wow'],
    ]

    io.forEach(xy => expect(palisub(xy[0])).toBe(xy[1]))
  })

  test('pipe function implementation', () => {
    const fns1 = [x => x + 5, x => x / 2, x => x * 4]
    const fns2 = [
      (a, b) => [a + b, b],
      (a, b) => [a / b, b],
      (a, b) => [Math.pow(a, b), b],
    ]

    expect(pipe(fns1, 7)).toBe(24)
    expect(pipe(fns2, 8, 2)[0]).toBe(25)
  })
})
