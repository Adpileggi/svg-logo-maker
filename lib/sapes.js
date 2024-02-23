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

    // renderSquare(){
    //     const newSquare = new Square('square', 'rect', color, )
    // }
}

class Circle extends Shape {
    constructor(shapeName, element, color, cx, xy, r){
        super(shapeName, element, color)
        this.cx = cx
        this.xy = xy
        this.r = r
    }
    // renderCircle(){
    
    // }
}

class Triangle extends Shape {
    constructor(shapeName, element, color, points){
        super(shapeName, element, color)
        this.points = points
    }
    // renderTriangle(){

    // }
}