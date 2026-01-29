//Object is the collection of any data type

const person = {
    firstName: "Mahil",
    lastName: "Patel",
    age: 20,
    hobbies: ["reading", "gaming", "cricket"],
    greet : function() {
        console.log("Hello");
}
}

//Accessing Object Properties
console.log(person.firstName);

//adding or modifying data of object
person.job = "Developer"; 
person.salary = 50000;
person.city = "keshod";
console.log(person);

//Deleting property from object
delete person.city;
delete person.salary;
console.log(person);

//nesting of objects
const student = {
    name: "Mahil Patel",
    age: 20,
    address: {
        city: "keshod",
        state: "Gujarat",
        country: "India"
    }
}
console.log(student.address.city);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
