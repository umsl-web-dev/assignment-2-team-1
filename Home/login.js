onLogin = () => {
// If email and password from localStorage are equal, then load the Profile Page
// let user= true;
// let password = document.getElementById("password").value;
// let email = document.getElementById("email").value;
// let username = document.getElementById("uname").value;

};

//Can you explain why this doesnt work? Or explain each line?
window.onload = () => {
    if (localStorage.getItem("users") !== null) {
      text = localStorage.getItem("users");
      obj = JSON.parse(text);
      x = obj[0].password;
      console.log(x); 
    }
  };