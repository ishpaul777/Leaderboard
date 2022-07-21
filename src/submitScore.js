/* eslint-disable  import/prefer-default-export */
import { displayScores } from './displayScore.js';

// for showing alert //!invalid or ?success
function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  if (className === 'success') {
    div.innerHTML = '<i class="bi bi-check2-all"></i>';
  } else {
    div.innerHTML = '<i class="bi bi-exclamation-octagon-fill"></i>';
  }
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('#add-score');
  const btn = document.querySelector('.btn-add-score');
  container.insertBefore(div, btn);
  // Vanish in 3 seconds
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

// submitting score
export const submitScore = async (name, score) => {
  if (name && score) { // if name and score is not empty
    showAlert('Score Added Successfully', 'success');// show alert
    // submit to API
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
  } else if (name === '' && score === '') { // IF fields are empty
    showAlert('  All fields are mandatory', 'invalid');
  }
  displayScores();// display scores to Ui
};
