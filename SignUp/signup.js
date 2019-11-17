let users = [];
let input = [];
let clear = document.getElementsByClassName("uname, email, password");

onSubmit = () => {
    let username = document.getElementById("uname").value;
    if (username === "" || null) {
        username = "Anonymous";
    }
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const inputObj =
    {
        username: username,
        email: email,
        password: password
    };
    const userObj =
    {
        username: username,
        email: email,
        password: password
    };
    saveToLocalStorage(userObj);
    console.log(inputObj);

};

saveToLocalStorage = userStorage => {
    users.push(userStorage);
    localStorage.setItem("users", JSON.stringify(users));


};

window.onload = () => {
    if (localStorage.getItem("users") !== null) {
        text = localStorage.getItem("users");
        obj = JSON.parse(text);

    }
};


//If inputObj is equal to an userObj, then go to the login page









