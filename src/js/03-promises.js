import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

let formInfo = {};

function onFormInput(evt) {
  formInfo[evt.target.name] = evt.target.value;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}

function onFormSubmit(event) {
  event.preventDefault();
  let time = Number(formInfo.delay);
  for (let i = 0; i < formInfo.amount; i += 1) {
    setTimeout(() => {
      createPromise(i + 1, time + i * Number(formInfo.step))
        .then(message => Notiflix.Notify.success(message))
        .catch(error => Notiflix.Notify.failure(error));
    }, time + i * Number(formInfo.step));
  }
}
