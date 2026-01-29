let student = {
    name: "first name",
    email: "USER@GMAIL.COM",
    course: "JavaScript,React,Node",
    marks: [45,78,60,90,33],
    hobbies: ["Music","Cricket","Reading"],
    address: ["india",["Gujarat","Keshod"]]
};

//String Operations
let trimmed = student.name.trim();
console.log("Trimmed Name:", trimmed);

let uppercasedEmail = student.email.toUpperCase();
console.log("Uppercased Email:", uppercasedEmail);

let lowwercasedEmail = student.email.toLowerCase();
console.log("Lowwercased Email:", lowwercasedEmail);

let courseIncludes = student.course.includes("React");
console.log("Course includes React:", courseIncludes);

let courseIndex = student.course.indexOf("Node");
console.log("Index of Node in course:", courseIndex);

let replacedCourse = student.course.replace("JavaScript", "JS");
console.log("Replaced Course:", replacedCourse);

let courseArray = student.course.split(",");
console.log("Course Array:", courseArray);

let lengthOfName = student.name.length;
console.log("Length of Name:", lengthOfName);

//Array Operations
student.hobbies.push("Swimming");
console.log("Hobbies after push:", student.hobbies);

student.hobbies.pop();
console.log("Hobbies after pop:", student.hobbies);

student.hobbies.unshift("Drawing");
console.log("Hobbies after unshift:", student.hobbies);

student.hobbies.shift();
console.log("Hobbies after shift:", student.hobbies);

let mergedArray = student.hobbies.concat(courseArray);
console.log("Merged Hobbies and Courses:", mergedArray);

student.course.includes("React");
console.log(student.course);

console.log("Index of Js:", student.course.indexOf("JS"));

let firstTwo = student.marks.slice(0, 2);
console.log("Sliced Mark:", firstTwo);

let hobbyString = student.hobbies.join(" - ");
console.log("Hobbies String:", hobbyString);


//Array Iteration Methods

//map
let mark = student.marks.map(mark => mark + 5);
console.log("Marks with Grace:", mark);

//filter
let passedMarks = student.marks.filter(mark => mark >= 40);
console.log("Passed Marks:", passedMarks);

//find
let firstHighMark = student.marks.find(mark => mark > 80);
console.log("First High Mark:", firstHighMark);

//forEach
student.hobbies.forEach(hobby => console.log("Hobby:", hobby));

//sort
let sortedMarks = [...student.marks].sort((a, b) => a - b);
console.log("Sorted Marks:", sortedMarks);

//reverse
student.marks.reverse();
console.log("Reversed Marks:", student.marks);

//flat
let flatAddress = student.address.flat();
console.log("Flat Address:", flatAddress);

