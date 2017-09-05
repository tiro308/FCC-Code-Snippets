
var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  // Only change code below this line.
  var gear=1;
  
  this.setGear= function(g){
    gear=g;
    return gear;
  };
  
  this.getGear= function(){
    return gear;
  };


};

var myCar = new Car();

var myBike = new Bike();
//console.log(myBike.setGear(4));
console.log(myBike.getGear());


var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]