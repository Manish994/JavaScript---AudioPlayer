let fillBar = document.querySelector(".fill");
const playPauseBtn = document.querySelector(".play-pause");
let audios = ["song/1.mp3", "song/2.mp3", "song/3.mp3", "song/4.mp3", "song/5.mp3", "song/6.mp3"];
const coverImg = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg"];


//
//Create an instance object of an audio
let audio = new Audio();
let currentSong = 0;

//
//Whenever the window load, song should play automatically.
window.onload = playSong;

function playSong() {
   audio.src = audios[currentSong];
   // audio.play();
}

//
//click event on play/pause button
function togglePlayPause() {
   if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = `<i class="fa fa-pause"></i>`;
      playPauseBtn.style.paddingLeft = "30px";
   } else {
      audio.pause();
      playPauseBtn.innerHTML = `<i class="fa fa-play"></i>`;
      playPauseBtn.style.paddingLeft = "33px";
   }
}