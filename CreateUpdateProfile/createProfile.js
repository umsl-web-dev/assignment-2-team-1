let profile = [];
editUserBtn = () => {
  // Directions: If the user wants to edit their name, photo, party, Age, address,
  //zipcode, state they can do so by pressing this ICON
};

saveBtn = () => {
  //Directions: pushes (updateUser method) all update information to local storage
  
  //console.log(obj[0].username)
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
  // changeUsername();
  //disable fields
  // nextPageCreateFeed();
};

saveToLocalStorage = userStorage => {
  profile.push(userStorage);
  localStorage.setItem("usersProfile", JSON.stringify(profile));
};

window.onload = () => {
  //Existing user
  // changeUsername();
  if (localStorage.getItem("users") !== null) {
    text = localStorage.getItem("users");
    obj = JSON.parse(text);
    changeUsername(obj[0].username);
  }
  
};

//Goes to the login page
nextPageCreateFeed = () => {
  console.log("This is the nextPage");
  window.location.href = '../Feed/feed.html'
  };
  
changeUsername = () => {
usernameChange = obj[0].username;
document.getElementById("nameLabel").innerHTML=usernameChange;
};
