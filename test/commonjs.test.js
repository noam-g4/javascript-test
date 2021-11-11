const {
  consec,
  palisub,
  pipe,
  requestMockup,
} = require('../exercises/commonjs')

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
    const add5 = x => x + 5
    const div2 = x => x / 2
    const mul4 = x => x * 4
    const fns1 = [add5, div2, mul4]

    expect(pipe(...fns1)(7)).toBe(24)
  })

  test('request mockup', () => {
    const caller = async success => {
      try {
        const { data } = await requestMockup(success, 'success', 'fail')
        return data
      } catch (err) {
        return err
      }
    }

    expect(caller(true)).toBe('success')
    expect(caller(false)).toBe('fail')
  })
})
