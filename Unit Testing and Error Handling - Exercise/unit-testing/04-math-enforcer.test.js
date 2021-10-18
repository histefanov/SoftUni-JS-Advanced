const { mathEnforcer } = require('./04-math-enforcer');
const { expect } = require('chai');

describe('mathEnforcer tests', () => {
    describe('addFive tests', () => {
        it('returns undefined if parameter is not a number', () => {
            expect(mathEnforcer.addFive()).to.be.undefined;
            expect(mathEnforcer.addFive('1')).to.be.undefined;
            expect(mathEnforcer.addFive('string')).to.be.undefined;
            expect(mathEnforcer.addFive([1])).to.be.undefined;
            expect(mathEnforcer.addFive({ num: 1 })).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        })

        it('returns expected result with valid parameter', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01);
        })
    })

    describe('subtractTen tests', () => {
        it('returns undefined if parameter is not a number', () => {
            expect(mathEnforcer.subtractTen()).to.be.undefined;
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
            expect(mathEnforcer.subtractTen('string')).to.be.undefined;
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
            expect(mathEnforcer.subtractTen({ num: 1 })).to.be.undefined;
        })

        it('returns expected result with valid parameter', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
        })
    })

    describe('sum tests', () => {
        it('returns undefined if any parameter is not a number', () => {
            expect(mathEnforcer.sum()).to.be.undefined;
            expect(mathEnforcer.sum(1)).to.be.undefined;
            expect(mathEnforcer.sum(-1, '1')).to.be.undefined;
            expect(mathEnforcer.sum(1, [1])).to.be.undefined;
            expect(mathEnforcer.sum('1', -1)).to.be.undefined;
            expect(mathEnforcer.sum([1], 1)).to.be.undefined;
            expect(mathEnforcer.sum('1', '1')).to.be.undefined;
            expect(mathEnforcer.sum('a', 'b')).to.be.undefined;
            expect(mathEnforcer.sum({}, {})).to.be.undefined;
            expect(mathEnforcer.sum([1, 1])).to.be.undefined;
        })

        it('returns expected result with valid parameters', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum(-10, 10)).to.equal(0);
            expect(mathEnforcer.sum(10, -10)).to.equal(0);
            expect(mathEnforcer.sum(-10, -10)).to.equal(-20);
            expect(mathEnforcer.sum(1.5, 1.5)).to.be.closeTo(3, 0.01);
            expect(mathEnforcer.sum(1.5, 1)).to.be.closeTo(2.5, 0.01);
            expect(mathEnforcer.sum(1, 1.5)).to.be.closeTo(2.5, 0.01);
        })
    })
})