//13.4.3 getter setter mit underscore um stackoverflow zu vermeiden
class Human{
    constructor(name){
        this.name=name;
    }
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
}
var h= new Human("willi");
console.log(h.name);

//      13.3.4 objekte ableiten
function Animal(name, color, age){
    this.name=name;
    this.color=color;
    this.age=age;
};
Animal.prototype.eat= function(food){
    console.log("mampf," + food);
}
Animal.prototype.drink= function(drink){
    console.log("schlürf," + drink);
}

function Dog(name, color, age, type){
    Animal.call(this,name,color,age);
    this.type=type;
};
Dog.prototype= new Animal();
Dog.prototype.constructor= Dog;

Dog.prototype.bark= function(){
    console.log("wuff");
}
let bello= new Dog("Bello","Weiß", 2,"Malteser");
bello.bark();


//        16.30 callback
function asyncFunction(callbackFunction){
    let result;
    setTimeout(
        ()=> {
            result=Math.floor(Math.random()*100)+1;
        },
        5000
    );
    callbackFunction();
    return result;
}

function callbackFunction(){
    console.log("Aufruf callbackFunction");
}

let result= asyncFunction(callbackFunction);
console.log(result); //nicht richtig