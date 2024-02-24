const Letters = require('./letters.js')

describe('Letters', () => {

    it('should throw an error more than three characters are entered', () => {
        const testChars = 'ADFP'
        const newChars = () => new Letters.Letters('150', '100', '60', 'middle', 'orange', testChars)

        expect(newChars).toThrow('Logo can only contain three characters.');
    });
});