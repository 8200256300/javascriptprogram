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

//
const user = {
    name: "Mahil Patel",
    role: "Admin",
    designation: "developer",
    age: 20,
    address: {
        city: "keshod",
        zip: 362220,
    }
}

const {name, age, role} = user;
console.log(name);
console.log(age);
console.log(role);

const {name: profilename, age: profileage} = user;
console.log(profilename);
console.log(profileage);

const array = [1,2,3];
const moreElements = [...array,4,5,6];
console.log(moreElements);

const OriginalArray = [1,2,3,4,5];
const copiedArray = [...OriginalArray];
console.log(copiedArray);

const array1 = [10,20,30];
const array2 = [40,50,60];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

//spread operator in object destructuring

const user1 = {
    username: "MahilPatel",
    city: "keshod",
}
console.log("Original user1:", user1);

const newObj = {
    ...user1,
    role: "Admin",
};
console.log("New Object:", newObj);


//copying object
const user2 = {
    username: "MahilKhanpara",
    city: "keshod",
}
const user3 = {...user2};
console.log("Copied Object:", user3);

//merging object
const obj1 = {
    name: "Mahil",
    age: 20,
}
const obj2 = {
    city: "keshod",
    role: "Developer",
    age: 25,
}
const Obj3 = {...obj1, ...obj2};
console.log("Merged Object:", Obj3);

