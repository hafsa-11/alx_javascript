// 4-rectangle.js

class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // Create an empty object if width or height is not a positive integer
        Object.create(null);
      }
    }
  
    print() {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  
    rotate() {
      // Exchange width and height
      [this.width, this.height] = [this.height, this.width];
    }
  
    double() {
      // Multiply width and height by 2
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;
  