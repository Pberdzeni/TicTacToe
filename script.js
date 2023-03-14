const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

function handleClick(e) {
  const cell = e.target;
  if (cell.textContent !== '') {
    return;
  }
  cell.textContent = currentPlayer;
  checkForWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent !== '' &&
        cells[a].textContent === cells[b].textContent &&
        cells[b].textContent === cells[c].textContent) {
      alert(`Player ${currentPlayer} wins!`);
      reset();
      return;
    }
  }
  const isTie = Array.from(cells).every(cell => cell.textContent !== '');
  if (isTie) {
    alert("It's a tie!");
    reset();
  }
}

function reset() {
  Array.from(cells).forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
