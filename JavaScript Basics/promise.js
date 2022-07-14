// starting with promises
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Registrition end");
      resolve();
    }, 3000);
  });
}

// promise works in three state:
// resolve(query is completed), pending(work in progress) & reject(query for completed)
function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email send");
      resolve();
    }, 2000);
  });
}

function login(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login sucessfull");
      resolve();
    }, 2000);
  });
}

function getUserData(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("got the data");
      resolve();
    }, 4000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user data displayed");
      resolve();
    }, 6000);
  });
}

register()
    .then(sendEmail)
    .then(login)
    .then(getUserData)
    .then(displayUserData);
console.log("Other application work!");

// 33:54