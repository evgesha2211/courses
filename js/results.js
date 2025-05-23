const video = document.getElementById('myVideo');
const progressBar = document.getElementById('progressBar');
const button = document.querySelector('.play-button');

function togglePlay() {
    if (video.paused) {
    video.play();
    button.style.opacity = 0;
    } else {
    video.pause();
    button.style.opacity = 1;
    }
}

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.value = percent;
});

function setProgress(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const pos = event.clientX - rect.left;
    const percent = pos / rect.width;
    video.currentTime = percent * video.duration;
}

progressBar.addEventListener('input', () => {
    const value = progressBar.value;
    video.currentTime = (value / 100) * video.duration;
});

video.addEventListener('play', () => {
    button.style.opacity = 0;
});

video.addEventListener('pause', () => {
    button.style.opacity = 1;
});