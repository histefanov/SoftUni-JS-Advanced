const isOddOrEven = require('./02-even-or-odd.js');
const { expect } = require('chai');

describe('isOddOrEven tests', () => {
    it('returns undefined if input is not a string', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({ key: 'value' })).to.be.undefined;
        expect(isOddOrEven([1, 2, 3])).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
    })

    it('returns "even" when string length is even', () => {
        expect(isOddOrEven('even')).to.equal('even');
    })

    it('returns "odd" when string length is odd', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    })
})