const Shapes = require('./shapes.js')

describe('Shapes', () => {

        it('should accept color input for render method', () => {
            const testColor = 'blue'
            const newShape = new Shapes.Square('square', 'rect', testColor, '60', '10', '180', '180')
    
            expect(newShape.render()).toEqual(`<rect x='60' y='10' width='180' height='180' fill='blue'/>`)
        });
        
        it('should accept color input for render method', () => {
            const testColor = 'blue'
            const newShape = new Shapes.Circle('circle', 'circle', testColor, '150', '100', '75')
    
            expect(newShape.render()).toEqual(`<circle cx="150" cy="100" r="75" fill="blue"/>`)
        });

        it('should accept color input for render method', () => {
            const testColor = 'blue'
            const newShape = new Shapes.Triangle('triangle', 'polygon', testColor, '150, 18 244, 182 56, 182')
    
            expect(newShape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill='blue'/>`)
        });
})

