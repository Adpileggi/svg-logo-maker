const Shape = require('./sapes.js');
const Letters = require('./letters.js');

function renderShape(data){
    if (data.shape[0] === 'square') {
        const square = new Shape.Square('square', 'rect', data.shapeColor, '60', '10', '180', '180');
        square.renderSquare();
    } else if (data.shape[0] === 'circle') {
        const circle = new Shape.Circle('circle', 'circle', data.shapeColor, '150', '100', '75');
        circle.renderCircle();
    } else {
        const triangle = new Shape.Triangle('triangle', 'polygon', data.shapeColor, '150, 20 25, 180 175, 180')
        triangle.renderTriangle();
    }
}

function renderText(data) {
    const text = new Letters('150', '100', '60', 'middle', data.textColor, data.characters)
    text.renderText();
}

function generateSVG(data) {
    return
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${renderShape(data)}

    ${renderText(data)}

</svg>`
}

module.exports = {
    generateSVG
}