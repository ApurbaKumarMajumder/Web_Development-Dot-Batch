console.log("Javascript: var, let & const ");

var a = 45;
var b = "Harry";
var c = null;
var d = undefined
{
    // let has block scope only
    let b = 'too'
    console.log(b);
}
console.log(b);
{
    var b = 'this'
    console.log(b);
}
console.log(b);
const harry = 0;
let c = null;
const author = "apurba";
// let author = "rohan"; // not allowed as const variable cannot be redeclared