// a) Create a person object
const person = { name: "John"} 
console.log(person);

// b) In JavaScript, constructor functions CAN be used to create objects
// Note: only 2 properties are available in the constructor function. 
function Person(fName, lName) { 
    this.firstName = fName;
    this.lastName = lName;
}

const person1 = new Person("John","Doe"); 
const person2 = new Person("Steve", "Smith");
<<<<<<< HEAD
const person3 = new Person("Sally", "Wong" );

console.log(person1); 
console.log(person2);
console.log(person3);
=======

console.log(person1); 
console.log(person2);
>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

// c) Add a new PROPERTY gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits gender property from it constructor ftn too.

Person.prototype.gender = "Male";
<<<<<<< HEAD
Person.prototype.age = 0;
console.log(person1.gender); 
console.log(person2.gender);

person3.gender = "Female";
person3.age = 21;
console.log(person3);

=======
console.log(person1.gender); 
console.log(person2.gender);

>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414
// d) Add a new METHOD gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits getFullName method from its constructor ftn too.

Person.prototype.getFullName = function(){ 
    return this.firstName +" "+ this.lastName;
};

console.log("Greetings " + person1.getFullName()); 
<<<<<<< HEAD
console.log("Greetings " + person2.getFullName());

// e) Challeng
// 1) Create a new property called DOB for the Person object
// 2) Create a new method called printNameAndDOB() to display a person's Name and Date of Birth

// Person.prototype.DOB = 0; Wrong method
Person.prototype.DOB = new Date(); // correct method

// person3.DOB = "7 Feb 1977" wrong method
person3.DOB = new Date("2-7-1977") // correct method

Person.prototype.printNameAndDOB = function(){ 
    return "Name: " + this.firstName + " " + this.lastName + ", DOB: " + this.DOB.toDateString();
};

// ALternative method using getFullName since it is already defined
// Person.prototype.printNameAndDOB = function(){ 
//     return "Name: " + this.getFullName() + ", DOB: " + this.DOB.toDateString();
// };

console.log(person3.printNameAndDOB());
=======
console.log("Greetings " + person2.getFullName());
>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414
