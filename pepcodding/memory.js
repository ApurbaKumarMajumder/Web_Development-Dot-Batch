// fn inside  -> global area
// window
// console.log(global);
// console.log(this);
console.log("a is", a);
var a;
console.log("a is", a);
a = 10;
console.log("a is", a);

// function statements

fn();
function fn() {
    console.log("I can be called before my declaration");
}
fn();

console.log("varName", varName);
var varName;
console.log("varName", varName);
varName = "Captain America";
console.log("varName", varName);
fn();
function fn() {
    console.log("Hello from fn");
}
fn();
fnContainer; // not working
var fnContainer = function () {
    console.log("I am an Expression");
}
fnContainer();