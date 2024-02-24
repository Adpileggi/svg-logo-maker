class Letters {
    constructor(x, y, fontSize, textAnchor, fill, text){
        this.x = x
        this.y = y,
        this.fontSize = fontSize
        this.textAnchor = textAnchor
        this.fill = fill
        this.text = text
    }

    renderText(){
        return `<text x='${this.x}' y='${this.y}' font-size='${this.fontSize},' text-anchor='${this.textAnchor}', fill='${this.fill}'>${this.text}</text>`
    }
}

module.exports = {
    Letters
}