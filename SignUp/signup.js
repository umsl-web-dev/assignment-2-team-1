//PROBLEM WITH THIS CODE
let users = [];

onSubmit = () => {
  // let loggedIn = false;
  let user= true;
  let password = document.getElementById("password").value;
  if (password === "" || null) {
    alert("Invalid password.");
  }
  let username = document.getElementById("uname").value;
  if (username === "" || null) {
    username = "Anonymous";
  }

  let email = document.getElementById("email").value;
  validateEmailAddress = (email) => {
    var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
  }
  if (validateEmailAddress(email) != true) {
    alert("Email is invalid.");
    user = false;
    clearInput(email, password, username, user);
  }

  if (user== true) {
    const userObj = {
    username: username,
    email: email,
    password: password,
    user: true
  };
  saveToLocalStorage(userObj);
  clearInput(email, password, username);
  alert("Successful!");
  nextPage();
  }
};

let saveToLocalStorage = userStorage => {
  users.push(userStorage);
  localStorage.setItem("users", JSON.stringify(users));
};

window.onload = () => {
  if (localStorage.getItem("users") !== null) {
    text = localStorage.getItem("users");
    obj = JSON.parse(text);
  }
};

clearInput = () => {
let unameClear= document.getElementById("uname").value= "";
let passwordClear= document.getElementById("password").value = "";
let emailClear= document.getElementById("email").value = "";
let userClear=false;
// let loggedInClear=false;
// loggedIn=loggedInClear;
user= userClear;
username = unameClear;
password = passwordClear;
email = emailClear;
localStorage.setItem("users", JSON.stringify(users));
};

//Goes to the login page
nextPage = () => {
console.log("This is the nextPage");
window.location.href = '../Home/login.html'
};
