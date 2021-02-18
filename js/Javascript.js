console.log({}.toString());
console.log(Object.prototype.toString.call([]))

const myArray = [2, 4, 6, 8]
console.log(myArray.toString());

const searchParams = new URLSearchParams([["Name", "Dom"], ["Age", 42]]);
console.log("search result: " + searchParams);


class Rectangle {
    constructor(width, height, unit){
        this.width = width
        this.hight = height
        this.unit = unit

      toString() {
        return `Rectangle: (${this.with}x${this.height}${this.unit})`;
      }
    }

class ColoredRectangle extends Rectangle{
    constructor(width, height, unit, color){
        super(width, height, unit);
        this.color = color;
      }
    }

const myRect = new Rectangle(5, 8, "cm");
console.log("Rectangle= " + myRect);


const myColoredRect = new ColoredRectangle(15, 3, "cm", "blue");
console.log("rectangle= " + myColoredRect);
