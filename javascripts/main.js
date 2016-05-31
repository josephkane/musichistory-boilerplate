'use strict';
var Songs = (function (songs) {

	const app = angular.module('Music History', []);

	songs.populateDOM = (XHRdata) => {
		// create a variable to use to populate the DOM with the data you get from the XHR
		// loop through the array provided (via argument) and add HTML strings and array elements
		let songInfo = "";
		for (var i = 0; i < XHRdata.songs.length; i++) {
			songInfo += `<div id='row${i}' class='songInfo'>`;
			songInfo += `<h2>${XHRdata.songs[i].song}</h2>`;
			songInfo += `<ul><li>${XHRdata.songs[i].artist}</li>`;
			songInfo += `<li class='album'>${XHRdata.songs[i].album}</li>`;
			songInfo += `<li>${XHRdata.songs[i].genre}</li>`;
			songInfo += `<li><button id='deleteButton${i}' class='buttons' type='button'>Delete</button></li></ul></div>`;

			$('#songSelector').html(songInfo);

		};

	};

	$(document).on('load', Songs.getData());
	$(document).on('load', Songs.addEventListener());

	return songs;

}(Songs || {}))

