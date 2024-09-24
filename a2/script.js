const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");

const fulBac = document.querySelector("#bodyf");
const fullScrBtn = document.querySelector("#full-btn");
const muteunImg = document.querySelector("#mute-img");
const repImg = document.querySelector("#repeat-img");
const speedImg = document.querySelector("#speed-img");
let fullScr = false;
let playRate = 1;

video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);

// Play and Pause Video
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// Progress bar
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// Toggle between full sceen and standed screen size
function toggleFull() {
  if (fullScr == false) {
    video.className = "fulVid";
    fullScrBtn.className = "ful";
    fulBac.hidden = false;
    playPauseBtn.className = "ppful";

    fullScr = true;
  } else {
    video.className = "vid";
    fullScrBtn.className = "";
    playPauseBtn.className = "";
    fulBac.hidden = true;
    fullScr = false;
  }
}
// Toggles fulll screen on escape key
document.body.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    toggleFull();
  }
});

// Adds function to the mute button with a changing image to indcate weter it is muted or not
function toggleMute() {
  if (video.muted == false) {
    video.muted = true;
    muteunImg.src =
      "https://img.icons8.com/?size=100&id=91635&format=png&color=000000";
  } else {
    video.muted = false;
    muteunImg.src =
      "https://img.icons8.com/?size=100&id=reqgj3e1uKBy&format=png&color=000000";
  }
}

// used to navigate to certain parts of the video that id defined in the timestamps
function timeJump(x) {
  video.currentTime = x;
}

// toggle between the video looping and not with a image change to indicate this
function toggleRep() {
  if (video.loop == false) {
    video.loop = true;
    repImg.src =
      "https://img.icons8.com/?size=100&id=91481&format=png&color=000000";
  } else {
    video.loop = false;
    repImg.src = "norep.png";
  }
}

// Function to change both skip fowrard and back in the video
function skip5(y) {
  video.currentTime += y;
}

// function used to cycle through diffrent playback rates and minimise the amount of buttons on the controle bar
function changeSpeed() {
  switch (playRate) {
    case 1:
      video.playbackRate = 1.5;
      playRate = 1.5;
      speedImg.src = "speed1.5.png";
      break;

    case 1.5:
      video.playbackRate = 2;
      playRate = 2;
      speedImg.src = "speed2.png";
      break;

    case 2:
      video.playbackRate = 1;
      playRate = 1;
      speedImg.src = "speed1.png";
      break;
  }
}
