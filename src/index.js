/* eslint-disable  import/prefer-default-export */
import './styles.css';

import { displayScores } from './displayScore.js';
import { submitScore } from './submitScore.js';

const addScore = document.querySelector('#add-score');
const refreshScoreBtn = document.querySelector('.btn-refresh');

// event: score is submitted
addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerNameEl = document.getElementById('player-name');
  const playerScoreEl = document.getElementById('player-score');
  const nameValue = playerNameEl.value;
  const scoreValue = playerScoreEl.value;
  submitScore(nameValue, scoreValue);
  playerNameEl.value = '';
  playerScoreEl.value = '';
});

// event content loaded
document.addEventListener('DOMContentLoaded', displayScores);

// event refresh Btn is clicked
refreshScoreBtn.addEventListener('click', displayScores);