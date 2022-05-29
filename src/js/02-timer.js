import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const timePickerEl = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    if (selectedDates[0].getTime() - date.getTime() < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else {
      startBtn.disabled = false;
    }
  },
};
const result = flatpickr(timePickerEl, options);

let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
// функция для рисовки интерфейса tc

function onStartBtnClick() {
  intervalId = setInterval(() => {
    let startTime = new Date();
    let selectedTime = result.selectedDates[0].getTime();
    const timeDifference = selectedTime - startTime.getTime();

    if (timeDifference < 0) {
      clearInterval(intervalId);
      return;
    }

    const convertedData = convertMs(timeDifference);
    changeTimerTextContent(convertedData);
  }, 1000);
}

function changeTimerTextContent({ days, hours, minutes, seconds }) {
  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
  // console.log(`${days}:${hours}:${minutes}:${seconds}`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, 0);
}
