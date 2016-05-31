var Songs = (function (songs) {

	const API_URL = 'https://music-history-64219.firebaseio.com/';

	songs.getData = () => {
		$.get(`${API_URL}.json`)
			.then((data) => {
				console.log("data: ", data);
				songs.populateDOM(data);
		});
	};


	// firebase.initializeApp({
	// 	apiKey: "AIzaSyAcOozlYrIKb8K_rzVUEbonM04qYOhZUfk",
	// 	authDomain: "music-history-64219.firebaseapp.com",
	// 	databaseURL: "https://music-history-64219.firebaseio.com",
	// 	storageBucket: "music-history-64219.appspot.com",
	// });
	return songs;

}(Songs || {}))