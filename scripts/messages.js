/**
 * @author pb
 */
function submitPost() {
	var user = $('#user')[0].value;
	var title = $('#title')[0].value;
	var post = $('#post')[0].value;
	//set datastring to pass php
	var dataString = 'user=' + user + '&title=' + title + '&post=' + post + '&messagepost=post';
	if (user == '' || title == '' || post == '') {
		alert("Please Fill All Fields");
	} 
	else {
		$.ajax({
			type: "POST",
			url: "./php/postmessages.php",
			data: dataString,
			cache: false,
			success: function(html) { alert(html); }
		});
	}
	return false;
}