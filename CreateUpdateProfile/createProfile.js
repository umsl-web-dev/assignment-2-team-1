let profile = [];
editUserBtn = () => {
  // Directions: If the user wants to edit their name, photo, party, Age, address,
  //zipcode, state they can do so by pressing this ICON
};

saveBtn = () => {
  //Directions: pushes (updateUser method) all update information to local storage
  let user = true;
  let party = document.getElementById("party").value;
  if (party=="") {
    user=false;
  }
  let age = document.getElementById("age").value;
  if (age == "") {
    user=false;
  }
  let address = document.getElementById("address").value;
  if (address == "") {
    user = false;
  }
  let zipCode = document.getElementById("zip").value;
  //I dont know why this is not being read, if the logic is correct
  if (zipCode.length !==5 || zipCode == "") {
    zipCode = document.getElementById("zip").value="";
    alert ("try that again");
    user = false;
  }
  let state = document.getElementById("state").value;
  if (state == "") {
    user=false;
  }

  const userObj2 = {
    partyAffil: party,
    age: age,
    address: address,
    zipCode: zipCode,
    state: state,
    user: user
  };
  console.log("userObj2::::" , userObj2.user);
 
  saveToLocalStorage(userObj2);
  //disable fields
  nextPageCreateFeed();
};

saveToLocalStorage = userStorage => {
  profile.push(userStorage);
  localStorage.setItem("usersProfile", JSON.stringify(profile));
};

saveToLocalStorages = userStorage => {
  logoutBtn.push(userStorage);
  localStorage.setItem("loggedIn",JSON.stringify(loggedInData));
};

window.onload = () => {
  //Existing user
  if (localStorage.getItem("users") !== null) {
    text = localStorage.getItem("users");
    obj = JSON.parse(text);
    changeUsername(obj[0].username);
    console.log("WINDOW ON LOAD: ", obj[0].username);
  }

  if (localStorage.getItem("loggedInProfiles") !== null) {
    texts = localStorage.getItem("loggedInProfiles");
    objs = JSON.parse (texts);
    // localStorage.setItem("loggedIn", "objs");
    // changeUserStatus(objs[0].loggedIn);
    
    console.log("WINDOW ON LOAD: ", objs[0].loggedIn);
    // changeUserStatus(objs[0].loggedIn);
  }

};
logoutBtn = () => {
  let user = JSON.parse(localStorage.getItem("loggedInProfiles"))
  user[0].loggedIn = false;

  localStorage.setItem("loggedInProfiles", JSON.stringify(user))
  console.log("status when logged out: ", user);
  alert("changed page");
  window.location.href = '../Login/login.html';

  return(loggedInData);
  }

changeUsersStatus = (user) => {
  let loggedInData = objs[0].loggedIn;
  saveToLocalStorages(loggedInData);
};

//Goes to the feed page--> Alex's Page
nextPageCreateFeed = () => {
  console.log("This is the nextPage");
  window.location.href = '../Feed/feed.html'
  };
  
changeUsername = () => {
let usernameChange = obj[0].username;
document.getElementById("nameLabel").innerHTML=usernameChange;
};


// function openNav() {
//   document.getElementById("myNav").style.height = "100%";
// }

// /* Close */
// function closeNav() {
//   document.getElementById("myNav").style.height = "0%";
// }
