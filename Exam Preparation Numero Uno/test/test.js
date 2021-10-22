const { testNumbers } = require('./testNumbers');
const { expect } = require('chai');

describe('testNumbers tests', () => {
    describe('sumNumbers tests', () => {
        it('returns undefined with missing params', () => {
            expect(testNumbers.sumNumbers(1)).to.be.undefined;
            expect(testNumbers.sumNumbers()).to.be.undefined;
        })

        it('returns undefined with non-number params', () => {
            expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers('1', '1')).to.be.undefined;
            expect(testNumbers.sumNumbers(1, [1])).to.be.undefined;
            expect(testNumbers.sumNumbers([1], 1)).to.be.undefined;
            expect(testNumbers.sumNumbers([1], [1])).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;
            expect(testNumbers.sumNumbers({}, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, {})).to.be.undefined;
            expect(testNumbers.sumNumbers({}, {})).to.be.undefined;
        })

        it('returns expected result with positive integers', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
            expect(testNumbers.sumNumbers(2, 22)).to.equal('24.00');
        });

        it('returns expected result with negative integers', () => {
            expect(testNumbers.sumNumbers(-1, -1)).to.equal('-2.00');
            expect(testNumbers.sumNumbers(1, -1)).to.equal('0.00');
            expect(testNumbers.sumNumbers(2, 22)).to.equal('24.00');
        });

        it('returns expected result with floating point numbers', () => {
            expect(testNumbers.sumNumbers(1.1, 1)).to.equal('2.10');
            expect(testNumbers.sumNumbers(1.1, 1.1)).to.equal('2.20');
            expect(testNumbers.sumNumbers(10.01, 20.02)).to.equal('30.03');
            expect(testNumbers.sumNumbers(10.111, 1)).to.equal('11.11');
        });
    });

    describe('numberChecker tests', () => {
        it('throws error if input is parsed to NaN', () => {
            expect(() => testNumbers.numberChecker('string')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker()).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker({ arg: 1 })).to.throw('The input is not a number!');
        });

        it('returns expected result with even numbers', () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(4)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(-2)).to.equal('The number is even!');
        })

        it('returns expected result with odd numbers', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(5)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!');
        })

        it('returns expected result with parseable strings', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('3')).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('0')).to.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
            expect(testNumbers.numberChecker('-2')).to.equal('The number is even!');
            expect(testNumbers.numberChecker('-1')).to.equal('The number is odd!');
        })

        it('returns expected result with floating point numbers', () => {
            expect(testNumbers.numberChecker(1.1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-1.1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('1.1')).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(2.01)).to.equal('The number is odd!');
        });
    });

    describe('averageSumArray tests', () => {
        it('throws error with missing param', () => {
            expect(() => testNumbers.averageSumArray()).to.throw();
        })

        it('returns NaN with empty array', () => {
            expect(testNumbers.averageSumArray([])).to.be.NaN;
        })

        it('returns NaN with non-numbers array', () => {
            expect(testNumbers.averageSumArray(['1', 'string'])).to.be.NaN;
        })

        it('returns expected result with valid array', () => {
            expect(testNumbers.averageSumArray([1])).to.equal(1);
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([-1, 2, 3])).to.equal(4 / 3);
            expect(testNumbers.averageSumArray([-1000, 1000])).to.equal(0);
            expect(testNumbers.averageSumArray([1.1, 1.2])).to.equal((1.1 + 1.2) / 2);
        })
    });
})