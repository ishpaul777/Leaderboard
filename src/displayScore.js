/* eslint-disable  import/prefer-default-export */
import { addScore } from './addScore.js';

export const displayScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aoZ3P4LAGNHz5kgTHm0u/scores');
  const data = await response.json();
  const displayScoreSection = document.querySelector('.score-list');
  let scoresArray = data.result;
  scoresArray = scoresArray.sort((a, b) => b.score - a.score);
  displayScoreSection.innerHTML = '';
  scoresArray.forEach((score) => {
    addScore(score.user, score.score);
  });
};
