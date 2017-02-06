/**
 * @author pb
 */
//globals - track posts on screen
var loadedPosts = 0;
var totalPosts = 0;
var posts = [];

//use form data to submit to SQL via PHP (AJAX)
function submitPost() {
	//values from form (but use IDs)
	var user = $('#user')[0].value;
	var title = $('#title')[0].value;
	var post = $('#post')[0].value;
	//construct php request
	var request = 'user=' + user + '&title=' + title + '&post=' + post + '&messagepost=post';
	//blank field check
	if (user == '' || title == '' || post == '') {
		alert("Please Fill All Fields");
	}
	//add validation
	//not errored - submit post
	else {
		$.ajax({
			type: "POST",
			url: "./php/postmessages.php",
			data: request,
			cache: false,
			success: function(html) { alert(html); }
		});
	}
	return false;
}

//will retrieve all posts from SQL
function retrievePosts() {
	$.ajax({
			type: "POST",
			url: "./php/retrievemessages.php",
			cache: false,
			success: function(html) {posts = JSON.parse(html); totalPosts = posts.length; loadPosts(5);}
		});
}
//will load new posts
function loadPosts(numToLoad) {
	//trying to load more than there is...
	if(totalPosts < numToLoad) {
		numToLoad = totalPosts;
	}
	for(var i = 0; i < numToLoad; i++) {
		i = i + loadedPosts;
		if(i > totalPosts)
			break;
		generatePost(i);
	}
	console.log(posts);
	return;
}

function generatePost(postToLoad) {
	var board = $('#messageboard')[0];
	var div = document.createElement("div");
	div.className = "post";
	board.appendChild(div);
	var h2 = document.createElement("h2");
	h2.innerHTML = posts[postToLoad].TITLE;
	div.appendChild(h2);
	var p = document.createElement("p");
	p.innerHTML = posts[postToLoad].USER;
	div.appendChild(p);
	var c = document.createElement("p");
	c.innerHTML = posts[postToLoad].CONTENT;
	div.appendChild(c);
}
