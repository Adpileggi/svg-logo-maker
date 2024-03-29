class Shape {
    constructor(shapeName, element, color){
        this.shapeName = shapeName;
        this.element = element
        this.color = color
    }
}

class Square extends Shape {
    constructor(shapeName, element, color, x, y, width, height){
        super(shapeName, element, color)
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    render(){
        return `<rect x='${this.x}' y='${this.y}' width='${this.width}' height='${this.height}' fill='${this.color}'/>`
    }
}

class Circle extends Shape {
    constructor(shapeName, element, color, cx, cy, r){
        super(shapeName, element, color)
        this.cx = cx
        this.cy = cy
        this.r = r
    }
    render(){
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    constructor(shapeName, element, color, points){
        super(shapeName, element, color)
        this.points = points
    }
    render(){
        return `<polygon points="${this.points}" fill='${this.color}'/>`
    }
}

module.exports = {
    Shape,
    Square,
    Circle,
    Triangle
}
