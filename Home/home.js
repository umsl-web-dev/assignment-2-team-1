window.onload = () => {
    if (localStorage.getItem("loggedInProfiles") !== null) {
      texts = localStorage.getItem("loggedInProfiles");
      objs = JSON.parse (texts);

      console.log("WINDOW ON LOAD: ", objs[0].loggedIn);
    }
  
  };

  loginLink = () => {
    let user = JSON.parse(localStorage.getItem("loggedInProfiles"))
    console.log("user: ", user);
    console.log("objs: ", objs[0].loggedIn);
    
    if (objs[0].loggedIn==true) {
        window.location.href = '../Feed/feed.html';
    } 
    };

