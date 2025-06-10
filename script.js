const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const seek = document.getElementById('seek');
const player = document.getElementById('player');
const songs = document.querySelectorAll('.song-list li');

songs.forEach(song => {
  song.addEventListener('click', () => {
    const src = song.getAttribute('data-src');
    audio.src = src;
    audio.play();
    playPauseBtn.textContent = '⏸';
    player.style.display = 'flex';
  });
});

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶';
  }
});

audio.addEventListener('timeupdate', () => {
  seek.max = audio.duration;
  seek.value = audio.currentTime;
});

seek.addEventListener('input', () => {
  audio.currentTime = seek.value;
});
