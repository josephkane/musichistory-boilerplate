// target the element on the DOM where you will insert data and assign it to a variable
var songList = document.getElementById("songSelector");
songList.addEventListener("click", clearRow);

// create the function that will populate the variable (DOM Element)
function dataCall () {

// assign data that was pulled in via XHR to a variable
	var data = JSON.parse(this.responseText);
	console.log(data);
	console.log(data.songs.length);

	populateDOM(data);
};

function populateDOM (XHRdata) {
	// create a variable to use to populate the DOM with the data you get from the XHR
	// loop through the array provided (via argument) and add HTML strings and array elements
	for (var i = 0; i < XHRdata.songs.length; i++) {
		var songInfo = "";
		songInfo += `<div id='row${i}' class='songInfo'>`;
		songInfo += `<h2>${XHRdata.songs[i].song}</h2>`;
		songInfo += `<ul><li>${XHRdata.songs[i].artist}</li>`;
		songInfo += `<li class='album'>${XHRdata.songs[i].album}</li>`;
		songInfo += `<li>${XHRdata.songs[i].genre}</li>`;
		songInfo += `<li><button id='deleteButton${i}' class='buttons' type='button'>Delete</button></li></ul></div>`;

		songList.innerHTML += songInfo;

	};

};

function clearRow (event) {
	var element = event.target.parentNode.parentNode.parentNode;

	if (element.className === "songInfo") {
		element.innerHTML = "";
		console.log(event);
	}
}



var dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataCall);

dataRequest.open("GET", "songs.json");

dataRequest.send();

