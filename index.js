function playPause() {
	var audio = document.getElementById("audio");
	var video = document.getElementById("video");
	if (audio.paused) {
		audio.play();
		audio.volume = 0.042;
		video.play();
	} else {
		audio.pause();
		video.play();
	}
}

function myFunction(x) {
	x.classList.toggle("fa-play");
	x.classList.toggle("fa-pause");
}