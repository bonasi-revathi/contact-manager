//blocking or sync
let fs =require("fs"); //importing filesystem
//read file synchronously - so it is blocking i/o
let data = fs.readFileSync("dummy.txt");
//will be printed first
console.log("test") 
//will be printed atlast as the program runs
//line by line and char by char
console.log(data.toString());
console.log("=========program ended============")