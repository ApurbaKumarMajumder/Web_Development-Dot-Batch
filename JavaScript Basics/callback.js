// Scenario
/*
1. Register
2. Send welcome email
3. Login
4. Get user data
5. Display user data
*/

// function waitForThreeSeconds() {
//     let ms = 3000 + new Date().getTime();
//     while(new Date() < ms) {}
// }

// function register() {
//     waitForThreeSeconds()
//     console.log("Registrition end");
// }
// function sendEmail() {
//     waitForThreeSeconds()
//     console.log("Email send");
// }
// function login() {
//     waitForThreeSeconds()
//     console.log("login sucessfull");
// }
// function getUserData() {
//     waitForThreeSeconds()
//     console.log("got the data");
// }
// function displayUserData() {
//     waitForThreeSeconds()
//     console.log("user data displayed");
// }

// register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log("Other application work!")
// the registration scenario the five functions are dependent on eachother but Other application works are also blocked do to this.
// It will block all other code execution until all above functions end
// this is called Synchronous programming


// Starting Asynchronous programming

// function register() {
//     setTimeout(() => {
//         console.log("Registrition end");
//     }, 1000);
// }
// function sendEmail() {
//     setTimeout(() => {
//         console.log("Email send");
//     }, 1000);
// }
// function login() {
//     setTimeout(() => {
//         console.log("login sucessfull");
//     }, 1000);
// }
// function getUserData() {
//     setTimeout(() => {
//         console.log("got the data");
//     }, 1000);
// }
// function displayUserData() {
//     setTimeout(() => {
//         console.log("user data displayed");
//     }, 1000);
// }

// register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log("Other application work!")

// starting with callbacks
// function register(callback) {
//     setTimeout(() => {
//         console.log("Registrition end");
//         callback();
//     }, 3000);
// }
// function sendEmail(callback) {
//     setTimeout(() => {
//         console.log("Email send");
//         callback();
//     }, 2000);
// }
// function login(callback) {
//     setTimeout(() => {
//         console.log("login sucessfull");
//         callback();
//     }, 1000);
// }
// function getUserData(callback) {
//     setTimeout(() => {
//         console.log("got the data");
//         callback();
//     }, 4000);
// }
// function displayUserData() {
//     setTimeout(() => {
//         console.log("user data displayed");
//         // callback();
//     }, 6000);
// }

// // function in function, this is very hard to manage
// // callback hell
// register(function () {
//     sendEmail(function () {
//         login(function () {
//             getUserData(function () {
//                 displayUserData();
//             });
//         });
//     });
// });

// console.log("Other application work!")