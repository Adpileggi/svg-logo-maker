class Letters {
    constructor(x, y, fontSize, textAnchor, fill, text){
        // throw new error if:
        // more than three characters are entered
        if (text.length > 3) {
            throw new Error('Logo can only contain maximum three characters.');
        }

        this.x = x
        this.y = y,
        this.fontSize = fontSize
        this.textAnchor = textAnchor
        this.fill = fill
        this.text = text
    }

    renderText(){
        return `<text x='${this.x}' y='${this.y}' font-size='${this.fontSize}' text-anchor='${this.textAnchor}' fill='${this.fill}'>${this.text}</text>`
    }
}

module.exports = Letters
