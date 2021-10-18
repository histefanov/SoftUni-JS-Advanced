
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

// ---------------------------------------------

// THIRD TASK: 
// const rgbToHexColor = require('./rgbToHex');
// const { expect } = require('chai');

// describe('rgbToHex tests', () => {
//     it('returns undefined when parameter is missing', () => {
//         expect(rgbToHexColor(100, 100)).to.be.undefined;
//     })

//     it('returns undefined when input is not a number', () => {
//         expect(rgbToHexColor('string', 100, 100)).to.be.undefined;
//     })

//     it('returns undefined when input is less than 0', () => {
//         expect(rgbToHexColor(-1, 100, 100)).to.be.undefined;
//     })

//     it('returns undefined when input is more than 255', () => {
//         expect(rgbToHexColor(256, 100, 100)).to.be.undefined;
//     })

//     it('returns color in hex when input is valid', () => {
//         expect(rgbToHexColor(100, 100, 100)).to.equal('#646464');
//     })

//     it('converts white', () => {
//         expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
//     })

//     it('converts black', () => {
//         expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
//     })
// })

// -----------------------------------------------------

// FOURTH TASK:
const createCalculator = require('./createCalculator');
const { expect } = require('chai');

describe('calculator tests', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    })

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    })

    it('adds a number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    })

    it('adds multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        instance.add(2);
        expect(instance.get()).to.equal(5);
    })

    it('accepts numbers as strings when adding', () => {
        instance.add('1');
        expect(instance.get()).to.equal(1);
    })

    it('subtracts a number', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    })

    it('subtracts multiple numbers', () => {
        instance.subtract(1);
        instance.subtract(2);
        instance.subtract(2);
        expect(instance.get()).to.equal(-5);
    })

    it('accepts numbers as strings when subtracting', () => {
        instance.subtract('1');
        expect(instance.get()).to.equal(-1);
    })

    it('performs mixed operations', () => {
        instance.add(5);
        instance.add('1');
        instance.subtract('2');
        instance.subtract(4);
        expect(instance.get()).to.equal(0);
    })
})