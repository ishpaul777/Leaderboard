/* eslint-disable  import/prefer-default-export */
import { displayScores } from './displayScore.js';

export const submitScore = async (name, score) => {
  if (name !== '' && score !== '') {
    const div = document.createElement('div');
    div.className = 'alert success';
    div.innerHTML = '<i class="bi bi-check2-all"></i>';
    div.appendChild(document.createTextNode('Score Added Successfully'));

    const container = document.querySelector('#add-score');
    const btn = document.querySelector('.btn-add-score');
    container.insertBefore(div, btn);
    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aoZ3P4LAGNHz5kgTHm0u/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    });
  } else if (name === '' && score === '') {
    const div = document.createElement('div');
    div.className = 'alert invalid';
    div.innerHTML = '<i class="bi bi-exclamation-octagon-fill"></i>';
    div.appendChild(document.createTextNode('  Please enter details in all fields'));

    const container = document.querySelector('#add-score');
    const btn = document.querySelector('.btn-add-score');
    container.insertBefore(div, btn);
    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }
  displayScores();
};