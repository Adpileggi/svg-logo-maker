class Shape {
    constructor(shapeName, element){
        this.shapeName = shapeName;
        this.element = element
    }
}

class Square extends Shape {
    constructor(shapeName, element, x, y, width, height){
        super(shapeName, element)
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}

class Circle extends Shape {
    constructor(shapeName, element, cx, xy, r){
        super(shapeName, element)
        this.cx = cx
        this.xy = xy
        this.r = r
    }
}

class Triangle extends Shape {
    constructor(shapeName, element, points){
        super(shapeName, element)
        this.points = points
    }
}