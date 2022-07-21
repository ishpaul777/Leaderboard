/* eslint-disable  import/prefer-default-export */

// add score to list
export const addScore = (playerName, playerScore) => {
  const displayScoreSection = document.querySelector('.score-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${playerName}</td>
    <td>${playerScore}</td>
    `;
  displayScoreSection.appendChild(row);
};
