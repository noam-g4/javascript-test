const TODO = null

/* ============================================================================
 * 1. CONSECUTIVE NUMBER COUNTER
 *
 * write a function that takes an number(0 to positive) n,
 * and returns the sum of all consecutive numbers from 0..n
 *
 * EXAMPLE:
 * consec(5) => 0 + 1 + 2 + 3 + 4 + 5 => 15
 */
const consec = () => TODO

/* ============================================================================
 * 2. SUB-STRING PALINDROME FINDER
 *
 * write a function that takes a string,
 * checks if it's a palindrome (the same when read in reverse)
 * if not, removes the first and last characters of the string
 * and repeats the process.
 * if it is, return the result
 *
 * !note - do not return a single character
 * !note - return a trimmed string
 *
 * EXAMPLE:
 * palisub("so i ask mom to smile") => "mom"
 * palisub("no palindromes here") => ""
 */
const palisub = () => TODO

/* ============================================================================
 * 3. PIPE
 *
 * write a function that takes an array of functions,
 * and an undefined amount of arguments.
 * this function should return the result of passing all of the inner functions
 *
 * EXAMPLE:
 * pipe([add5, div2, mul4], 3) => 16
 * !note - this is the same as calling: mul4(div2(add5(3))) => 16
 *
 * pipe([add, div, pow], 4, 2) => [9, 2]
 * !note - this is the same as calling: pow(div(add(4, 2), 2), 2)
 */
const pipe = () => TODO

// ============================================================================
module.exports = {
  consec,
  palisub,
  pipe,
}
