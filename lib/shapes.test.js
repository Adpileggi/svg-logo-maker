const Shapes = require('./shapes.js')

describe('Shapes', () => {

        it('should throw an error when no shape is selected', () => {
            const testArray = []
            const newShape = () => new Shapes.Shape(testArray, 'polygon', 'orange')

            expect(newShape).toThrow('You must select only one shape.');
        });

        it('should throw an error when more than one shape is selected', () => {
            const testArray = ['circle', 'square']
            const newShape = () => new Shapes.Shape(testArray, 'polygon', 'orange')

            expect(newShape).toThrow('You must select only one shape.');
        });

})

