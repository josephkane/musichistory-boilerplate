// target the element on the DOM where you will insert data and assign it to a variable
var songList = document.getElementById("songSelector");

// create the function that will populate the variable (DOM Element)
function dataCall () {

// assign data that was pulled in via XHR to a variable
	var data = JSON.parse(this.responseText);
	console.log(data);
	console.log(data.songs.length);

	// create a variable to use to populate the DOM with the data you get from the XHR
	var songInfo = "";

	for (var i = 0; i < data.songs.length; i++) {
		songInfo += "<div class='songInfo'>";
		songInfo += "<h2>" + data.songs[i].song + "</h2>";
		songInfo += "<ul><li>" + data.songs[i].artist + "</li>";
		songInfo += "<li class='album'>" + data.songs[i].album + "</li>";
		songInfo += "<li>" + data.songs[i].genre + "</li>";
		songInfo += "<li><button class='deleteButton buttons'>Delete</button></li></ul></div>";
	};

	var deleteButtons = songSelector.getElementsByClassName("deleteButton");

	for (var j = 0; j < deleteButtons.length; j++) {
		deleteButtons[j].addEventListener("click", function() {
			songInfo.innerHTML = "";
		});
	};

	console.log(deleteButtons);
	console.log(typeof deleteButtons[0]);

	songList.innerHTML = songInfo;

};

var dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataCall);

dataRequest.open("GET", "songs.json");

dataRequest.send();

