const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");

const bodyE = document.querySelector("body");
const fullScrBtn = document.querySelector("#full-btn");
let fullScr = false;


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
function toggleFull(){
    if (fullScr == false){
        video.className = "fulVid";
        fullScrBtn.className = "ful";
        bodyE.className = "bodyf";
        playPauseBtn.className = "ppful"; 
        // Get play and paus button class working
        fullScr = true;
    } else {
        video.className = "vid";
        fullScrBtn.className = "";
        bodyE.className = "";
        playPauseBtn.className = "";
        fullScr = false;
    }
}
// Toggles fulll screen on escape key
document.body.addEventListener('keydown', function(e) {
    if (e.key == "Escape") {
      toggleFull();
    }
  });

  function toggleMute(){
    // Turn off sound change icone, on seoncd click turn on sound
  }
