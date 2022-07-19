/* eslint-disable  import/prefer-default-export */

export const addScore = async (playerName, playerScore) => {
  const displayScoreSection = document.querySelector('.score-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${playerName}</td>
    <td>${playerScore}</td>
    `;
  displayScoreSection.appendChild(row);
};
