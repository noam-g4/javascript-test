const TODO = null

/* ============================================================================
 * 1. CONSECUTIVE NUMBER COUNTER
 *
 * write a function that takes a number(positive integer) n,
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
 * 3. PIPE AND CURRYING
 *
 * write a function that takes a list of functions,
 * and returns a function that takes a single value.
 * the inner(returned) function should output the result
 * of running the list of functions in series passed with the
 * the value as the initial value.
 *
 * EXAMPLE:
 * const f = pipe(add5, div2, mul4)
 * f(3) => 16
 * !note - this is the same as calling: mul4(div2(add5(3))) => 16
 */
const pipe = () => () => TODO

/* ============================================================================
 * 4. REQUEST MOCKUP
 *
 * a request mockup, is a function that mimics the behaviour of a service request
 * (like a RestAPI over http request).
 *
 * write a function that takes a boolean value for success/failure flag,
 * 2 objects: one for data response on success and one for error response
 * and return a Promise after 3 SECONDS.
 * if flag is set to success - return the FIRST OBJECT nested inside "data" key, inside of a "response" object.
 * if flag is set to !success - return the SECOND OBJECT
 *
 * EXAMPLE:
 * async function caller(success) {
 *   try {
 *       const { data } = await requestMockup(sucess,
 *                                            { msg: 'success!' },
 *                                            { msg: 'fail!' })
 *       return data
 *   } catch(err) {
 *       return err
 *   }
 * }
 *
 * invoking:
 * caller(true)
 *
 * should return => { data : { msg: 'success!' } }
 * after 3 seconds
 *
 * caller(false) => { msg: 'fail!' } (after 3 seconds)
 */
const requestMockup = () => TODO

// ============================================================================
module.exports = {
  consec,
  palisub,
  pipe,
  requestMockup,
}
