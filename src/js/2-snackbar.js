import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formEl = event.currentTarget;
  const delay = parseInt(formEl.elements['delay'].value);
  const state = formEl.elements['state'].value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(result => {
      iziToast.success({
        title: 'Result',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
      //   console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
      //   console.log(`❌ Rejected promise in ${delay}ms`);
    });
});
