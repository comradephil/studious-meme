/**
 * @author (c) Copyright 2017 Phil Bill
 */
$(document).ready(function() {loadMenu(); updateContent("home");});
function updateContent(updatedContent) {
	var elem = $('#content');
	console.log("obtained element "+elem[0].id+" updating to "+updatedContent);
	if(updatedContent == "home") {
		elem.load('./pages/home.html');
	}
	else if(updatedContent == "bio") {	
		elem.load('./pages/bio.html');
	}
	else if(updatedContent == "work") {
		elem.load('./pages/work.html');
	}
	else if(updatedContent == "games") {
		elem.load('./pages/games.html');
	}
	else {
		updateContent('home');
	}
}
function loadMenu() {
	$('#menuBar').load('./elems/navbar.html');
}
