// 2-rectangle.js

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number' || !Number.isInteger(w) || !Number.isInteger(h)) {
        // If w or h is not a positive integer, create an empty object
        return {};
      }
  
      this.width = w;
      this.height = h;
    }
  }
  
  module.exports = Rectangle;
  