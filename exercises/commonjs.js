const TODO = null
/* ============================================================================
 * 1. HIGHER ORDER FUNCTIONS
 *
 * write a function that takes an array of similar objects, a predicate function
 * (a function that return true/false) and a string that represent a key in an object.
 * this function takes the array, filters it by the predicate and returns a NEW ARRAY
 * contained the values of the passed key name.
 *
 * EXAMPLE:
 * const employees = [{name: 'john', role: 'dev', email: 'john@mail.com'},
 *                    {name: 'jane', role:'data', email: 'jane@mail.com'},
 *                    ...etc]
 *
 * filterMap(employees, e => e.role === 'dev', 'email')
 * this should return => ['john@mail.com', ...and all the emails of the the "dev" employees]
 */
const filterMap = (arr, prd, key) => arr.filter(prd).map(x => x[key])

/* ============================================================================
 * 2. CONSECUTIVE NUMBER COUNTER
 *
 * write a function that takes a number(positive integer) n,
 * and returns the sum of all consecutive numbers from 0..n
 *
 * EXAMPLE:
 * consec(5) => 0 + 1 + 2 + 3 + 4 + 5 => 15
 */
const consec = n => ((n + 1) / 2) * n

/* ============================================================================
 * 3. SUB-STRING PALINDROME FINDER
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
 * 4. PIPE AND CURRYING
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
 * 5. REQUEST MOCKUP
 *
 * a request mockup, is a function that mimics the behaviour of a service request
 * (like a RestAPI over http request).
 *
 * write a function that takes a boolean value for success/failure flag,
 * 2 objects: one for data response on success and one for error response
 * and return a Promise.
 * if flag is set to 'true' - return the FIRST OBJECT nested inside "data" key, inside of a "response" object.
 * if flag is set to 'false' - return the SECOND OBJECT
 *
 * EXAMPLE:
 * const isSuccess = [BOOLEAN VALUE]              // either true/ false
 * requestMockup(isSuccess, 'success', 'fail')
 *  .then(res => res.data)                        // return 'success'
 *  .catch(err => err)                            // return 'fail!'
 */
const requestMockup = () => TODO

/* ============================================================================
 * 6. ASYNC/AWAIT - TRY/CATCH
 *
 * write an async function that wraps around the function from the last question.
 * it takes EXACTLY the same arguments as the last function and passes them on,
 * then it returns the res.data on successful request and the error on failure.
 *
 * EXAMPLE:
 * const isSuccess = [BOOLEAN VALUE]              // either true/ false
 * reqMockWrapper(isSuccess, 'success', 'fail')
 *  .then(data => data)                           // return 'success'
 *  .catch(err => err)                            // return 'fail!'
 */
const reqMockWrapper = async (isSuccess, res, err) => {
  try {
    const { data } = await requestMockup(isSuccess, res, err)
    return data
  } catch (err) {
    return err
  }
}

/* ============================================================================
 * 7. THROW AN ERROR
 *
 * write a function that takes an array and a number
 * if the length of the array is larger than the number,
 * throw and error with the message "out of bounds"
 * else, return the length of the array. (use try/catch block)
 *
 * EXAMPLE
 * const max = Number
 * indexInArray([1, 2, 3], 2) // returns => 3
 * indexInArray([1, 2, 3], 4) // returns => Error('out of bounds')
 */
const indexInArray = () => TODO

/* ============================================================================
 * 8. RECURSION - THE POWER OPERATOR
 *
 * write a function that raise x to the power of n
 *
 * pow(5, 4) => 625
 * pow(2, 2) => 4
 * (!notice that) = pow(7, 0) => 1
 */
const pow = () => TODO

// ============================================================================
module.exports = {
  consec,
  palisub,
  pipe,
  requestMockup,
  reqMockWrapper,
  filterMap,
  indexInArray,
  pow,
}
