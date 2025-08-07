// Global variables (accessible from main script)
let chessGame = null;
let isGameActive = false;

// Function to start the game
function startChessGame() {
  isGameActive = true;
  chessGame = new Chess(); // From chess.min.js
  const response = 'Chess game started! You are white. Enter moves like "e2 e4". Type "quit" to end.';
  output.innerHTML += `<p>${response}</p>`; // Assuming 'output' is global or accessible
  displayChessBoard();
}

// Function to handle moves
function handleChessMove(cmd) {
  if (cmd === 'quit') {
    isGameActive = false;
    chessGame = null;
    output.innerHTML += `<p>Chess game ended.</p>`;
    return;
  }
  
  try {
    const move = chessGame.move(cmd, { sloppy: true });
    if (move === null) throw new Error('Invalid move');
    
    displayChessBoard();
    
    if (chessGame.isGameOver()) {
      endChessGame();
      return;
    }
    
    // Simple AI: Random legal move for black
    const moves = chessGame.moves();
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    chessGame.move(randomMove);
    output.innerHTML += `<p>AI plays: ${randomMove}</p>`;
    displayChessBoard();
    
    if (chessGame.isGameOver()) {
      endChessGame();
      return;
    }
  } catch (e) {
    output.innerHTML += `<p>Invalid move: ${cmd}. Try again.</p>`;
  }
}

// Function to display the board
function displayChessBoard() {
  const board = chessGame.ascii();
  output.innerHTML += `<pre>${board}</pre>`;
}

// Function to end the game
function endChessGame() {
  isGameActive = false;
  let status = chessGame.isCheckmate() ? 'Checkmate!' : chessGame.isDraw() ? 'Draw!' : 'Game over.';
  output.innerHTML += `<p>${status}</p>`;
  chessGame = null;
}
