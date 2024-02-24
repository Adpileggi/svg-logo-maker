const Shape = require('./sapes.js');
const Letters = require('./letters.js');

function renderShape(data){
    if (data.shape[0] === 'square') {
        const square = new Shape.Square('square', 'rect', data.shapeColor, '10', '10', '175', '175');
        renderSquare();
    } else if (data.shape[0] === 'circle') {
        const circle = new Shape.Circle('circle', 'circle', data.shapeColor, '150', '100', '75');
        renderCircle();
    } else {
        const triangle = new Shape.Triangle('triangle', 'polygon', data.shapeColor, '150, 20 25, 180 175, 180')
    }
}

// function renderText() {

// }

// function generateSVG(data) {

// }

module.exports = {
    // generateSVG()
}