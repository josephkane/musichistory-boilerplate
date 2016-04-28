// target the element on the DOM where you will insert data and assign it to a variable
var songList = document.getElementById("songSelector");

// create the function that will populate the variable (DOM Element)
function dataCall () {

// assign data that was pulled in via XHR to a variable
	var data = JSON.parse(this.responseText);

	var songInfo = "";

	for (var i = 0; i < data.songs.length; i++) {
		songInfo += "<div class='songInfo'>";
		songInfo += "<h2>" + data.songs[i].song + "</h2>";
		songInfo += "<ul><li>" + data.songs[i].artist + "</li>";
		songInfo += "<li class='album'>" + data.songs[i].album + "</li>";
		songInfo += "<li>" + data.songs[i].genre + "</li></ul></div";

	songList.innerHTML = songInfo;
	}

	console.log(data);
	console.log(data.songs.length);
	console.log(songInfo);
}

var dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataCall);

dataRequest.open("GET", "songs.json");

dataRequest.send();

