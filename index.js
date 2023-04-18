function createRectangle() {
    return rectangle = {
        length:1,
        breadth:5 ,
        draw() {
            console.log('Drawing a rectangle!')
        }
    }
}

let answer = createRectangle();