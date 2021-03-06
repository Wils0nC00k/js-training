'use strict'

/*
 * Create a constant variables for each primitives
 * `str`, `num`, `bool` and `undef`
 *
 * @notions Primitive and Operators, Variables
 */

// Your code :
const str = "1337";

//* Begin of tests
const assert = require('assert')



assert.strictEqual(typeof str, 'string')
assert.strictEqual(str, '1337')

const num = 42;

assert.strictEqual(typeof num, 'number')
assert.strictEqual(num, 42)

const bool = false;

assert.strictEqual(typeof bool, 'boolean')
assert.strictEqual(bool, false)

const undef = undefined;

assert.strictEqual(typeof undef, 'undefined')
assert.strictEqual(undef, undefined)
// End of tests */
