let commentArr = new Array();

// Fetching commentArr(if exists) from localstorage
(()=> { 
	let commentsString = localStorage.getItem("commentArr");
	if(commentsString !== null) {
		commentArr = JSON.parse(commentsString);
		for(let i=0; i<commentArr.length; i++) {
			commentArr[i].lastUpdated = new Date(commentArr[i].lastUpdated); // converting to Date Object
			commentArr[i].upvotes = parseInt(commentArr[i].upvotes);	// Converting string to Int
			commentArr[i].downvotes = parseInt(commentArr[i].downvotes); // Converting string to Int
			commentArr[i].childrenIds = JSON.parse(commentArr[i].childrenIds); // converting string back to array form
		}
	}
})();

window.onload = () => {
  //Existing user
  if (localStorage.getItem("users") !== null) {
    text = localStorage.getItem("users");
    obj = JSON.parse(text);
    changeUsername(obj[0].username);
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


changeUsername = () => {
  usernameChange = obj[0].username;
  document.getElementById("names").innerHTML=usernameChange;
  };
  
  logoutBtn = () => {
    let user = JSON.parse(localStorage.getItem("loggedInProfiles"))
    user[0].loggedIn = false;
  
    localStorage.setItem("loggedInProfiles", JSON.stringify(user))
    console.log("status when logged out: ", user);
    // alert("changed page");
    window.location.href = '../Login/login.html';
  
    return(loggedInData);
    }

    saveToLocalStorages = userStorage => {
        logoutBtn.push(userStorage);
        localStorage.setItem("loggedIn",JSON.stringify(loggedInData));
      };



document.addEventListener('DOMContentLoaded', (params)=> {
	if(commentArr.length)
		renderComments();
	const addButton = document.getElementById("add-comment");	
	addButton.addEventListener("click", ()=> {
		let names = document.getElementById("names").value;
		let content = document.getElementById("comment").value;
		addComment(names, content, null);
	}, false);

	const commentsList = document.getElementById("commentsList");
	commentsList.addEventListener("click", (event)=> {
		if(event.target.nodeName === 'A' || event.target.nodeName === 'BUTTON'){
			let parts = event.target.id.split("-");
			let type = parts[0];
		
				
			let id = parts[parts.length-1];
			let abc = event.target.id.split("reply-")[1]; 
			if(type == 'reply') {
				let inputElem = `
					<li id="input-${abc}">
					<div id="names" class="comment-input-row">
						<div>
							<label id="names" class="name-names"> </label>
						</div>
					</div>
					<div>
						<textarea rows="5" id="content-${abc}" class="comment-box" placeholder="Your reply...."></textarea>
						<div>
							<button id="addreply-${abc}" class="add-btn">Submit</button>
						</div>
					</div>
					</li>
					`;
					
				let childListElemId = `childlist-${event.target.id.split("reply-")[1]}`;
				let childListElem = document.getElementById(childListElemId);
				
				if(childListElem == null) {
					childListElem = `<ul id="childlist-${event.target.id.split("reply-")[1]}"> ${inputElem} </ul>`;
					document.getElementById(`comment-${abc}`).innerHTML += childListElem;								
				} else {
					childListElem.innerHTML = inputElem + childListElem.innerHTML;
				}
			} else if(type == 'addreply') {
				let content = document.getElementById(`content-${abc}`).value;
				names = obj[0].username;
				document.getElementById("names").innerHTML=usernameChange;
				
				addComment(names, content, id);
			} else if(type == 'upvotes' || type == 'downvotes') {
				commentArr[id][type]++;
				renderComments();
				storeComments();
			}
		}
	}, false);
},false);

// Storing in local storage
let storeComments = () =>{ 
	// Storing comments in stringified array in local storage
	let val = "[";
	for(let i in commentArr) {
		val += Comment.toJSONString(commentArr[i]);
		(i != commentArr.length - 1) ? val += "," : val += "";
	}
	val += "]";
	localStorage.setItem('commentArr', val);
}

let renderComment = (comment) => {
	let id = comment.id;
	let listElem = `
			<div class="hr"><hr/></div>
			<li id="comment-${id}" style="max-width:600px;">
		 	<div class="comment-header">
				<div  class="comment-names">
					${comment.names}
				</div>
				<div style="color:rgba(0,0,0,0.3);margin-top:20px;">
					posted ${timeAgo(comment.lastUpdated)}
				</div>
			</div> 
			<div>
			 ${comment.content}
			</div>
			<div>
				${comment.upvotes} <a href="#" role="button" id="upvotes-${id}">Upvotes</a>
				${comment.downvotes} <a href="#" role="button" id="downvotes-${id}">Downvote</a>
				<a href="#" role="button" id="reply-${id}">Reply</a>
			</div>`;
	if(comment.childrenIds.length != 0) {
		listElem += `<ul id="childlist-${id}">`;
		comment.childrenIds.forEach(commentId=> {
			listElem += renderComment(commentArr[commentId]);
		});
		listElem += "</ul>";
	}		
	listElem += "</li>";
	return listElem;
}

// Pass parent comment from rootComments to renderComment
let renderComments = ()=> {
	let rootComments = [];
	commentArr.forEach(comment=> {
		if(comment.parentId === null || comment.parentId == "null") {
			rootComments.push(comment);
		}
	});
	let commentList = '';
	rootComments.forEach(comment=> {
		commentList += renderComment(comment);
	});
	document.getElementById("commentsList").innerHTML = commentList;
}

// Adding new comment to memory and UI
let addComment = (names, content, parent) => { 
	let comment = new Comment(commentArr.length,names,content,0,0, parent);
	commentArr.push(comment);
	if(parent != null) {
		commentArr[parent].childrenIds.push(commentArr.length-1);
	} 
	storeComments();
	renderComments();
}

class Comment {
	constructor(id, names, content, upvotes, downvotes, parentId) {
		this.id = id;
		this.names = obj[0].username;
		this.content = content;
		this.lastUpdated = new Date();
		this.upvotes = upvotes;
		this.downvotes = downvotes;
		this.childrenIds = [];
		this.parentId = parentId;
	}
	static toJSONString(comment) { // created JSON string to send/save on server
		return `{
			"id" : "${comment.id}",
			"names" : "${comment.names}",
			"content" : "${comment.content}",
			"upvotes" : "${comment.upvotes}",
			"downvotes" : "${comment.downvotes}",
			"lastUpdated": "${comment.lastUpdated}",
			"parentId": "${comment.parentId}",
			"childrenIds": "${JSON.stringify(comment.childrenIds)}"
		}`;
  	}
}

let timeAgo = (date)=>{
	let currentDate = new Date();
	let yearDiff = currentDate.getFullYear() - date.getFullYear();

	if(yearDiff>0)
		return `${yearDiff} year${yearDiff==1? "":"s"} ago`;
	
	let monthDiff = currentDate.getMonth() - date.getMonth();
	if(monthDiff>0)
		return `${monthDiff} month${monthDiff == 1 ? "" : "s"} ago`;
	
	let dateDiff = currentDate.getDate() - date.getDate();
	if (dateDiff > 0)
		return `${dateDiff} day${dateDiff == 1 ? "" : "s"} ago`;
	
	let hourDiff = currentDate.getHours() - date.getHours();
	if (hourDiff > 0)
		return `${hourDiff} hour${hourDiff == 1 ? "" : "s"} ago`;

	let minuteDiff = currentDate.getMinutes() - date.getMinutes();
	if (minuteDiff > 0)
		return `${minuteDiff} minute${minuteDiff == 1 ? "" : "s"} ago`;
	return `a few seconds ago`;
}