/* eslint-disable  import/prefer-default-export */
import { displayScores } from './displayScore.js';

export const submitScore = async (name, score) => {
  if (name !== '' && score !== '') {
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
  }
  displayScores();
};