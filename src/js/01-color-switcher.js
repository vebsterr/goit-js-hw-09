const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

const CHANGE_COLOR_DELAY = 1000;
let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DELAY);

  refs.startBtn.style.cursor = 'auto';
  refs.startBtn.disabled = true;

  refs.stopBtn.style.cursor = 'pointer';
  refs.stopBtn.disabled = false;
}

function onStopBtnClick() {
  clearInterval(intervalId);

  refs.startBtn.style.cursor = 'pointer';
  refs.startBtn.disabled = false;

  refs.stopBtn.style.cursor = 'auto';
  refs.stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
