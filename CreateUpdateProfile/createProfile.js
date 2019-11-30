let profile = [];
editUserBtn = () => {
  // Directions: If the user wants to edit their name, photo, party, Age, address,
  //zipcode, state they can do so by pressing this ICON
};

saveBtn = () => {
  //Directions: pushes (updateUser method) all update information to local storage
  let party = document.getElementById("party").value;
  let age = document.getElementById("age").value;
  let address = document.getElementById("address").value;
  let zipCode = document.getElementById("zip").value;
  let state = document.getElementById("state").value;

  const userObj2 = {
    partyAffil: party,
    age: age,
    address: address,
    zipCode: zipCode,
    state: state
  };
  
  saveToLocalStorage(userObj2);
  nextPageCreateFeed();
};

saveToLocalStorage = userStorage => {
  profile.push(userStorage);
  localStorage.setItem("usersProfile", JSON.stringify(profile));
};

window.onload = () => {
  //Existing user
  if (localStorage.getItem("usersProfile") !== null) {
    text = localStorage.getItem("usersProfile");
    obj = JSON.parse(text);
  }
};

updateUser = () => {
  //Directions: updates user information in local storage
};

deleteUser = () => {
  //Directions: deletes information on the user in local storage
};

renderUser = () => {
  // for (userStorage of users) {
  //   x.appendChild(name);
  //   console.log("name::::: ", x);
  // }
};

//Goes to the login page
nextPageCreateFeed = () => {
  console.log("This is the nextPage");
  window.location.href = '../Feed/feed.html'
  };
  
