'use strict';

app.controller('mhSideBar', ($scope, $http) => {

	const API_URL = 'https://music-history-64219.firebaseio.com/';

	$http.get(`${API_URL}.json`)
		.then((response) => {
			console.log("data:", response.songs);
		})

})