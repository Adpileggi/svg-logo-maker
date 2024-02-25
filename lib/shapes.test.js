const Shapes = require('./shapes.js')

describe('Shapes', () => {

        // it('should throw an error when no shape is selected', () => {
        //     const testArray = []
        //     const newShape =  new Shapes.Shape(testArray, 'polygon', 'orange')

        //     expect(newShape).toThrow('You must select only one shape.');
        // });

        // it('should throw an error when more than one shape is selected', () => {
        //     const testArray = ['circle', 'square']
        //     const newShape = new Shapes.Shape(testArray, 'polygon', 'orange')
        //     // console.log(newShape)
        //     expect(newShape).toThrow('You must select only one shape.');
        // });

        it('should accept color input for render method', () => {
            const testColor = 'blue'
            const newShape = new Shapes.Square('square', 'rect', testColor, '60', '10', '180', '180')
            // console.log(testColor)
            expect(newShape.render()).toEqual(`<rect x='60' y='10' width='180' height='180' fill='blue'/>`)
        });
})

