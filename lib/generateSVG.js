const Shape = require('./shapes.js');
const Letters = require('./letters.js');

function generateShape(data){
    if (data.shape === 'square') {
        const square = new Shape.Square('square', 'rect', data.shapeColor, '60', '10', '180', '180');
        return square
    } else if (data.shape === 'circle') {
        const circle = new Shape.Circle('circle', 'circle', data.shapeColor, '150', '100', '75');
        return circle
    } else {
        const triangle = new Shape.Triangle('triangle', 'polygon', data.shapeColor, '150, 20 25, 180 175, 180')
        return triangle
    }
}

function renderText(data) {
    const text = new Letters('150', '100', '60', 'middle', data.textColor, data.characters)
    return text.renderText();
}

function generateSVG(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${generateShape(data).render()}

    ${renderText(data)}

</svg>`
}

module.exports = {
    generateSVG
}