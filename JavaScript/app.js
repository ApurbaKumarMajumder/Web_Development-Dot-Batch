console.log('Chaliye shuru karte hai');

// object create
let rectangle = {
  length: 1,
  breath: 2,

  draw: function() {
    console.log('drawing rectangle');
  }
};

// factory function

function createRectangle() {

  return rectangle = {
    length: 1,
    breadth: 2,

    draw: function() {
      console.log('drawing rectangle');
    }
  };
} 