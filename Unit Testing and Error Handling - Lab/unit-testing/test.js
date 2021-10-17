
// FIRST TASK:
// const sum = require('./sum');
// const { expect } = require('chai');

// describe('Sum test', () => {
//     it('Return value should be correct', () => {
//         expect(sum([1, 2, 3, 4])).to.equal(10);
//     })
// })

// ------------------------------------------------------

// SECOND TASK:
// const isSymmetric = require('./isSymmetric');
// const { expect } = require('chai');

// describe('IsSymmetric tests', () => {
//     it('returns false if input is not an array', () => {
//         expect(isSymmetric('string')).to.be.false;
//     })

//     it('returns false if input is not an array', () => {
//         expect(isSymmetric(1)).to.be.false;
//     })

//     it('returns false if input is not an array', () => {
//         expect(isSymmetric({})).to.be.false;
//     })

//     it('returns true if array is symmetrical', () => {
//         expect(isSymmetric([1, 2, 2, 1])).to.be.true;
//     })

//     it('returns true if array is symmetrical with odd length', () => {
//         expect(isSymmetric([1, 2, 1])).to.be.true;
//     })

//     it('returns true if array is symmetrical and made of strings', () => {
//         expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
//     })

//     it('returns false if array is has different value types', () => {
//         expect(isSymmetric([1, 2, '1'])).to.be.false;
//     })

//     it('returns false if array is non-symmetrical', () => {
//         expect(isSymmetric([1, 2, 3, 4])).to.be.false;
//     })

//     it('returns false if array is non-symmetrical with strings', () => {
//         expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
//     })
// })