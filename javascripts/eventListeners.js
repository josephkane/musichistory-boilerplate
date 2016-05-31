'use strict';

var Songs = (function(songs) {

	songs.addEventListener = () => {
		$('#songSelector').on('click', (e) => {
			songs.clearRow(e);
		});
	};

	songs.clearRow = (e) => {
		let element = $(e.target).closest('div');
		$(element).html('');
	};

	return songs;

}(Songs || {}))