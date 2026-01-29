//string methods 
//length()
//trim()
//toUpperCase()
//toLowerCase()
//includes()
//indexOf()
//slice()
//substring()
//replace()
//concat()
//split()

let str = "  Hello, Mahil Patel!"
console.log(str)
console.log("Length:", str.length) 

let trimtext = str.trim();
console.log("Trimmed:", trimtext)
console.log("Uppercase:", trimtext.toUpperCase())
console.log("Lowercase:", trimtext.toLowerCase())

console.log("Includes 'Mahil':", trimtext.includes("Mahil"))
console.log("Index of 'Patel':", trimtext.indexOf("Patel"))
console.log("Slice :", trimtext.slice(7, 12))
console.log("Substring :", trimtext.substring(7, 12))
console.log("Replace :", trimtext.replace("Mahil", "Patel"))
console.log("Concat :", trimtext.concat(" Welcome!"))
console.log("Split :", trimtext.split(" "))
