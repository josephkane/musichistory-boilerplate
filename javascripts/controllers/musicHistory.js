'use strict';

app.controller('musicHistory', ($scope, $http) => {

	const API_URL = 'https://music-history-64219.firebaseio.com/';

	$http.get(`${API_URL}.json`)
		.then((response) => {
			$scope.songs = response.data.songs;
		})

	// function populateDOM (XHRdata) {
	// 	let songInfo = "";
	// 	for (var i = 0; i < XHRdata.songs.length; i++) {
	// 		songInfo += `<div id='row${i}' class='songInfo'>`;
	// 		songInfo += `<h2>${XHRdata.songs[i].song}</h2>`;
	// 		songInfo += `<ul><li>${XHRdata.songs[i].artist}</li>`;
	// 		songInfo += `<li class='album'>${XHRdata.songs[i].album}</li>`;
	// 		songInfo += `<li>${XHRdata.songs[i].genre}</li>`;
	// 		songInfo += `<li><button id='deleteButton${i}' class='buttons' type='button'>Delete</button></li></ul></div>`;

	// 		$('#songSelector').html(songInfo);
	// 	};
	// };

})