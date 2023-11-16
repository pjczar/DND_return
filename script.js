document.addEventListener("DOMContentLoaded", function () {
    // Get audio element
    var audio = document.getElementById("myAudio");

    // Get play/pause button
    var playPauseBtn = document.getElementById("playPauseBtn");

    // Get volume control
    var volumeControl = document.getElementById("volumeControl");

    // Set initial volume
    audio.volume = volumeControl.value / 100;

    // Play/Pause functionality
    playPauseBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "Pause";
        } else {
            audio.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    // Volume control
    volumeControl.addEventListener("input", function () {
        audio.volume = volumeControl.value / 100;
    });
});
