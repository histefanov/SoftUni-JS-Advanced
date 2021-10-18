const { lookupChar } = require('./03-char-lookup');
const { expect } = require('chai');

describe('lookupChar tests', () => {
    it('returns undefined if first parameter is not a string', () => {
        expect(lookupChar(0, 0)).to.be.undefined;
        expect(lookupChar({}, 0)).to.be.undefined;
        expect(lookupChar(['string'], 0)).to.be.undefined;        
    })

    it('returns undefined if index is not an integer', () => {
        expect(lookupChar('string', 1.1)).to.be.undefined;
        expect(lookupChar('string', '0')).to.be.undefined;
        expect(lookupChar('string', [1])).to.be.undefined;
        expect(lookupChar('string', { index: 1 })).to.be.undefined;
    })

    it('returns error message if index is out of bounds', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
        expect(lookupChar('string', 6)).to.equal('Incorrect index');
    })

    it('returns error message when string is empty', () => {
        expect(lookupChar('', 0)).to.equal('Incorrect index');
    })

    it('returns expected char at the provided index', () => {
        expect(lookupChar('string', 0)).to.equal('s');
        expect(lookupChar('string', 5)).to.equal('g');
    })
})