// eslint-disable import/no-named-as-default
import './styles.css';

import { displayScores } from './displayScore.js';
import { submitScore } from './submitScore';

const addScore = document.querySelector('#add-score');
const refreshScoreBtn = document.querySelector('.btn-refresh');

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

document.addEventListener('DOMContentLoaded', displayScores);

refreshScoreBtn.addEventListener('click', () => {
  displayScores();
});