loggedInArr=[];
onLogin = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let loggedIn=false;
  let elementEmail = obj[0].email;
  let elementPassword = obj[0].password;

  if (email == elementEmail && password == elementPassword && loggedIn == false) {
    loggedInProfiles = {
      loggedIn: true,
      email: elementEmail,
      password: elementPassword
    }
    
    saveToLocalStorage(loggedInProfiles);
    nextPageCreate();
    
  } else {
    alert("Incorrect credentials!");
  }
  clearField();
};

//Can you explain why this doesnt work? Or explain each line?
window.onload = () => {
  if (localStorage.getItem("users") !== null) {
    text = localStorage.getItem("users");
    obj = JSON.parse(text);
  }
};

saveToLocalStorage = userStorage => {
  loggedInArr.push(userStorage);
  localStorage.setItem("loggedInProfiles", JSON.stringify(loggedInArr));
};

nextPageCreate = () => {
  window.location.href = '../CreateUpdateProfile/createProfile.html'
};

clearField = () => {
email = " ";
password = " ";
}
