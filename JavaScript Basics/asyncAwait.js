function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Registrition end");
      resolve();
    }, 3000);
  });
}

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

// starting with Async await
async function authenticate() {
    try {
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    } catch (err) {
        console.log(err);
        throw new Error();
    }
}

authenticate().then(() => {
    console.log("Registration process complete", "\n", "Thank you for chossing us.");
})
// .catch((err) => {
//     console.log(err);
// })
console.log("Other application work!");