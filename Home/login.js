onLogin = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let elementEmail = obj[0].email;
  let elementPassword = obj[0].password;

  if (email == elementEmail && password == elementPassword) {
    nextPageCreate();
    clearField();
  } else {
    alert("Incorrect credentials!");
  }
};

//Can you explain why this doesnt work? Or explain each line?
window.onload = () => {
  if (localStorage.getItem("users") !== null) {
    text = localStorage.getItem("users");
    obj = JSON.parse(text);
  }
};

nextPageCreate = () => {
  window.location.href = '../CreateUpdateProfile/createProfile.html'
};

clearField = () => {
email = " ";
password = " ";
}
