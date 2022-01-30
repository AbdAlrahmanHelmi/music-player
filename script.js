const image = document.querySelector(`img`);
const title = document.getElementById(`title`);
const artist = document.getElementById(`artist`);
const progressContainer = document.getElementById(`progress-container`);
const progress = document.getElementById(`progress`);
const music = document.querySelector(`audio`);
const prevBtn = document.getElementById(`prev`);
const playBtn = document.getElementById(`play`);
const nextBtn = document.getElementById(`next`);
const songs = [
  {
    name: `jacinto-1`,
    displayName: `Electric chill`,
    artist: `Jacinto Design`,
  },
  {
    name: `jacinto-2`,
    displayName: `Seven Nation`,
    artist: `Jacinto Design`,
  },
  {
    name: `jacinto-3`,
    displayName: `throw (remix)`,
    artist: `Jacinto Design`,
  },
  {
    name: `metric-1`,
    displayName: `Metric chill`,
    artist: `Metric Design`,
  },
];

let isPlaying = false;

const playSong = function () {
  isPlaying = true;
  playBtn.classList.replace(`fa-play`, `fa-pause`);
  playBtn.setAttribute(`title`, `pause`);
  music.play();
};
const pauseSong = function () {
  isPlaying = false;
  playBtn.classList.replace(`fa-pause`, `fa-play`);
  playBtn.setAttribute(`title`, `play`);
  music.pause();
};

playBtn.addEventListener(`click`, () => (isPlaying ? pauseSong() : playSong()));

const loadSong = function (song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
};
let i = 0;

nextBtn.addEventListener(`click`, () => {
  i++;
  i = i > songs.length - 1 ? 0 : i;
  loadSong(songs[i]);
});

prevBtn.addEventListener(`click`, () => {
  i--;
  i = i < 0 ? songs.length - 1 : i;
  loadSong(songs[i]);
});

const current = document.getElementById(`current-time`);
const durationTime = document.getElementById(`duration`);
const updateProgressBar = function (e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    console.log(duration, currentTime);
    const progressPersent = (currentTime / duration) * 100;
    current.textContent = `${Math.floor(currentTime)}`;
    progress.style.width = `${progressPersent}%`;
    durationTime.textContent = `${Math.floor(duration)}`;
  }
};

music.addEventListener(`timeupdate`, updateProgressBar);
