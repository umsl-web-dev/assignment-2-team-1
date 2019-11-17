let input = [];

onSubmit = () => {
    let username = document.getElementById("uname").value;
    if (username === "") {
        username = "Anonymous";
    }
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    input = [username, email, password];

    // if (input === obj) {
    //     alert("An account already exists.");
    //     //reload the page
    // } else {
    const userObj = {
        username: username,
        email: email,
        password: password
    };
    let myJSON = JSON.stringify(userObj);
    localStorage.setItem("testJSON", myJSON);

    // Retrieving data:
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);

    console.log(obj);
   
    //Say thank you we are processing you information + make a loading thingy next to the login button for a few seconds
    //Redirect to the Home page so user can login 
    // }
};





