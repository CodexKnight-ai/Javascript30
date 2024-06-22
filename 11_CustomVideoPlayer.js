const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const videoButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Function to toggle video play/pause
function videoToggle() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Function to update the play/pause button
function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    videoButton.textContent = icon;
}

// Function to skip forward or backward
function skip() {
    const skipTime = parseFloat(this.dataset.skip);
    video.currentTime += skipTime;
}

// Function to handle range slider changes
function handleRange() {
    video[this.name] = this.value;
}

// Function to update the progress bar
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// Function to handle scrubbing
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', videoToggle);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
video.addEventListener('timeupdate', handleProgress);

videoButton.addEventListener('click', videoToggle);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRange));
ranges.forEach(range => range.addEventListener('mousemove', handleRange));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mouseout', () => mousedown = false); // To handle when the mouse leaves the progress bar
