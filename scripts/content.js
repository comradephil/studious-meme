/**
 * @author (c) Copyright 2017 Phil Bill
 */
$(document).ready(function() {loadMenu(); updateContent("home");});
var currentContent = "";
function updateContent(updatedContent) {
	var elem = $('#content');
	if(currentContent == updatedContent)
		return;
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
	currentContent = updatedContent;
}
function loadMenu() {
	$('#menuBar').load('./elems/navbar.html');
}
function loadPostMenu() {
	$('#comments').load('./extras/form.html');
	if($('#comments').css('display') == 'none') {
		$('#comments').css('display','block');
	}
	else {
		$('#comments').css('display','none');
	}
}
