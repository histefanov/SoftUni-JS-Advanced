const { library } = require('./library');
const { expect } = require('chai');

describe('library tests', () => {
    describe('calcPriceOfBook tests', () => {
        it('throws error with invalid book name', () => {        
            expect(() => library.calcPriceOfBook(0)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(0, 2000)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(['book'], 2000)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({ book: 'book'}, 2000)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(null, 2000)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(undefined, 2000)).to.throw('Invalid input');
        });

        it('throws error with invalid year', () => {
            expect(() => library.calcPriceOfBook('book')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('book', 2000.1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('book', '2000')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('book', 'random')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('book', [2000])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('book', {year: 2000})).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('book', null)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('book', undefined).to.throw('Invalid input'));
        });

        it('throws error with invalid params', () => {
            expect(() => library.calcPriceOfBook()).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(0, '2000')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(null, 2000.1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(undefined, undefined)).to.throw('Invalid input');
        });

        it('returns expected result with valid params', () => {
            expect(library.calcPriceOfBook('book', 0)).to.equal('Price of book is 10.00');
            expect(library.calcPriceOfBook('book', -1)).to.equal('Price of book is 10.00');
            expect(library.calcPriceOfBook('book', 1900)).to.equal('Price of book is 10.00');
            expect(library.calcPriceOfBook('book', 1980)).to.equal('Price of book is 10.00');
            expect(library.calcPriceOfBook('book', 2000)).to.equal('Price of book is 20.00');
        })
    });

    describe('findBook tests', () => {
        it('throws error with empty array', () => {
            expect(() => library.findBook([], 'book')).to.throw('No books currently available');
        });

        it('returns expected result when book exists in array', () => {
            expect(library.findBook(['book'], 'book')).to.equal('We found the book you want.');
            expect(library.findBook(['book1', 'book2', 'harry potter'], 'harry potter')).to.equal('We found the book you want.');
        })

        it('returns expected result when book doesnt exist', () => {
            expect(library.findBook(['book'], 'book1')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(['book1', 'book2', 'harry potter'], 'the hunger games')).to.equal('The book you are looking for is not here!');
        })
    });

    describe('arrangeTheBooks tests', () => {
        it('throws error with non-integer param', () => {
            expect(() => library.arrangeTheBooks()).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(1.1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('str')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks([1])).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks({ num: 1 })).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(null)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(undefined)).to.throw('Invalid input');
        });

        it('throws error with negative param', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-15)).to.throw('Invalid input');
        });

        it('returns success message with less than 41 books', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(25)).to.equal('Great job, the books are arranged.');
        });

        it('returns failure message with more than 40 books', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(500)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(1000)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});
