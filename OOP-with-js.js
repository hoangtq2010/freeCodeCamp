//Create a Basic JavaScript Object
let duck = {
  name: "Aflac",
  numLegs: 2
};


//Use Dot Notation to Access the Properties of an Object
let dog = {
    name: "Spot",
    numLegs: 4
  };
console.log(dog.name);
console.log(dog.numLegs);


//Create a Method on an Object
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}     //Method
    // sayName : () => "The name of this duck is " + duck.name + "."
  };
duck.sayName();


//Make Code More Reusable with the this Keyword
/**If the variable name changes, any code referencing the original name would need to be updated as well.
 * A way to avoid these issues is with the "this" keyword
 */
 let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function()  {return "This dog has " + this.numLegs + " legs.";}
  };
dog.sayLegs();


//Define a Constructor Function
/**Constructors are defined with a capitalized name to distinguish 
them from other functions that are not constructors.

Constructors use the keyword this to set properties of the object they will create.
Inside the constructor, this refers to the new object it will create.

Constructors define properties and behaviors instead of returning a value as other functions might. */
function Dog(){
    this.name = "husky";
    this.color = "white";
    this.numLegs = 4;
}


//Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
let hound = new Dog; // "new" operator is used when calling a constructor. 
/*Without the "new" operator, "this" inside the constructor would not point to the newly created object,
 giving unexpected results. */



 //Extend Constructors to Receive Arguments
 function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  
  let terrier = new Dog("sabaka","yellow");



//Verify an Object's Constructor with instanceof and return true/false
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
let myHouse = new House(5);
myHouse instanceof House;



//Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  let canary = new Bird("Tweety");
  let ownProps = [];
  for(let property in canary){
    if(canary.hasOwnProperty(property)){        //check "own property" in "canary"
      ownProps.push(property);
    }
  }


//Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs : 4,
  eat : function(){
    console.log("ngoam ngoam")
  },
  describe : function(){
    console.log("My name is " + this.name)
  }
};

//Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor : Dog,    //if don't set constructor -> property has been overwritten
  numLegs: 4,               /** setting the prototype to a new object. It erases the constructor property */
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};



//Understand Where an Object’s Prototype Comes From
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);



//Understand the Prototype Chain
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);    //true
Object.prototype.isPrototypeOf(Dog.prototype);   // beagle -> Dog -> Object



//Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear,
};

function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};



//Inherit Behaviors from a Supertype
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype); 



//Set the Child's Prototype to an Instance of the ParentPassed
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();



//Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();  //duck.constructor ---> return Bird 
                        //if don't have "Bird.prototype.constructor = Bird " duck.constructor ---> return Animal
let beagle = new Dog(); //beagle.constructor ---> return Dog



//Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
  console.log("Woof!");
}
let beagle = new Dog();



//Override Inherited Methods
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird."
}

let penguin = new Penguin();
console.log(penguin.fly());   //JS check ->penguin ->Bird ->Object 



//Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){
  obj.glide = function(){
    console.log("wooosh!");
  }
}

glideMixin(bird);
glideMixin(boat);



//Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  let weight = 15;
  this.getWeight = function(){
    return weight;
  };
}

let donald = new Bird();
donald.getWeight();   // 15



//Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("A cozy nest is ready");
}) ()



//Use an IIFE to Create a Module
let funModule = (function() {
  return {
    isCuteMixin : function(obj){
      obj.isCute = function(){
        return true;
      }
    },

    singMixin : function(obj){
      obj.sing = function(){
        console.log("Singing to an awesome tune"); 
      }
    }
  }
})( );