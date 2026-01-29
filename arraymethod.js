//Array Methods

//length()
//push()
//pop()
//shift() 
//unshift()
//concat()
//includes()
//indexOf()
//splice()
//slice()
//join()
//delete()
//filter()
//map()
//find()
//forEach()
//sort()
//reverse()
//flat()

// let arr = [10, 20, 30, 40, 50];
// console.log("Original Array:", arr);
// console.log("Length:", arr.length);

// arr.push(60);
// console.log("After Push:", arr);

// arr.pop();
// console.log("After Pop:", arr);

// arr.unshift(5);
// console.log("After Unshift:", arr);

// arr.shift();
// console.log("After Shift:", arr);

// let arr2 = [70, 80];
// let com= arr.concat(arr2);
// console.log("Original Array:", arr);
// console.log("After Concat:", com);

// console.log("Includes 30:", arr.includes(30));

// console.log("Index of 40:", arr.indexOf(40));


// let sliced = arr.slice(1, 4);
// console.log("Sliced Array:", sliced);

// arr.splice(2, 1, 35);
// console.log("After Splice:", arr);

// console.log("Join:", arr.join("-"));

// delete arr[3];
// console.log("After Delete:", arr);


console.log("Array iteration methods:");

let numbers = [1, 2, 3, 4, 5, 6];

console.log("map :", numbers.map(num => num * 2));
console.log("After map Original Array:", numbers);

console.log("filter :", numbers.filter(num => num > 2));
console.log("After filter Original Array:", numbers);

console.log("forEach :");
numbers.forEach(num => console.log(num));
console.log("After forEach Original Array:", numbers);

let num = [2, 5, 8, 1, 7];
console.log("sort :", num.sort());

console.log("reverse :", num.reverse());

let nestedArr = [1, [2, 3], [4, 5]];
console.log("Original Nested Array:", nestedArr);
console.log("flat :", nestedArr.flat());


//array destructuring
let array = [10, 20, 30, 40, 50];
const [a, b, c, d] = array;
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);

let array1 = [1, 2, 3, 4, 5];
const [x, , y] = array1;
console.log("x:", x);
console.log("y:", y);

//Rest operator in array destructuring

const num1 = [1 , 2, 3, 4, 5];
const [p, q, ...rest] = num1;
console.log("p:", p);
console.log("q:", q);
console.log("rest:", rest);