//inherit
var a={propA:"prop of a"};

var b={propB:"prop of b"};

b.prototype=a.prototype;
console.log(a.prototype);

//Closures in Detail
var a=10;

function outer(){
	var b=20;

	var inner= function(){
		a++;
		b++;
		console.log(a);
		console.log(b);
	};
	return inner;
}

var innerFn=outer();

innerFn();

var innerFn2=outer();
innerFn2();

//|Function hat property "prototype"| <--verbunden über properties--> |Prototype hat property "constructor"|
//Mutter aller Objekte ist ein Objekt, dass eine Funktion ist
console.log(Object.prototype);
var obj=new Object();
var simple={};
//simple und obj zeigen auf selben prototype
console.log( obj.__proto__ === simple.__proto__ );

//-------property lookup mit prototypes
function foo(){}

var newFooObj = new foo();
console.log(newFooObj);

foo.prototype.test="prototyp objekt von foo";
console.log(foo.prototype.test);
console.log(newFooObj.__proto__.test);  //Dunder Proto ist VERALTET! jetzt: .prototype
console.log(foo.prototype.test===foo.prototype.test); //gleiche prototyp objektj

// Prototyp Objekt der Constructor Funktion
console.log(newFooObj.__proto__);
//--- erfahren wer das object erstellt hat
console.log(newFooObj.__proto__.constructor);


//------objekt ohne constructor mode
function createBike(gear, speed){
	var bike={};
	bike.gear=gear;
  bike.speed=speed;
	return bike;
}
//objekt mit constructor mode
function ConstructorBike(gear, speed){ //soll großbuchstabe beginnen
	this.gear=gear;
  this.speed=speed;
  this.increaseGear= function(){ //kann ein anderes this haben als seine constructor proto function
    this.gear+=3;
    console.log(this);
  };
}

function Mechanic(name){
  this.name=name;
}

var objBike={ //soll großbuchstabe beginnen
	tires:3,
	speed:1
}

console.log(bi=new ConstructorBike(1,24));
//bi.increaseGear();
var mike=new Mechanic("Mike");
mike.increaseGear= bi.increaseGear;
mike.increaseGear.call(bi);//mit call wird das this der inneren function an das callende obj gebunden
console.log(bi.increaseGear);
// console.log(b= createBike(12,20));
// console.log(bi=new ConstructorBike(4,24));
// console.log(Object.getPrototypeOf(b));
// //von Objekten ableiten
// var tricicle=Object.create(objBike);
// console.log(tricicle.tires);
