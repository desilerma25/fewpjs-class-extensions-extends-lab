// Your code here
class Polygon {
    constructor(arrayOfInt) {
        this.arrayOfInt = arrayOfInt
        this.count = this.arrayOfInt.length
    }

    get countSides() {
        return this.arrayOfInt.length
    }

    get perimeter() {
        return this.arrayOfInt.reduce((accumulator, currentValue) => {return accumulator + currentValue})
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            if (this.arrayOfInt[0] + this.arrayOfInt[1] < this.arrayOfInt[2] || this.arrayOfInt[0] + this.arrayOfInt[2] < this.arrayOfInt[1] || this.arrayOfInt[1] + this.arrayOfInt[2] < this.arrayOfInt[0]) {
                return false
            } else {
                return true
            }
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            return this.perimeter === this.arrayOfInt[0] * 4 ? true : false
        }
    }

    get area() {
        return this.arrayOfInt[0] ** 2
    }
} 
