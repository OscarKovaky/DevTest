export class Connect4 {

  private grid: number[][];
  private currentPlayer: number;
  private gameFinished: boolean;

  constructor() {
    this.grid = Array.from({ length: 6 }, () => Array(7).fill(0));
    this.currentPlayer = 1;
    this.gameFinished = false;
  }

  play(col: number): string {

    if (this.gameFinished) {
      return "Game has finished!";
    }

    if (col < 0 || col > 6) {
      return "¡Columna inválida!";
    }

    for (let row = 5; row >= 0; row--) {
      if (this.grid[row][col] === 0) {
        this.grid[row][col] = this.currentPlayer;

        if (this.checkWin(row, col)) {
          this.gameFinished = true;
          const result = `Player ${this.currentPlayer} wins!`;
          this.currentPlayer = 3 - this.currentPlayer;
          return result;
        }

        const currentPlayerText = `Player ${this.currentPlayer}`;
        this.currentPlayer = 3 - this.currentPlayer;
        return `${currentPlayerText} has a turn`;
      }
    }

    return "Column full!";
  }

  private checkWin(row: number, col: number): boolean {
    return (
      this.checkLine(row, col, -1, 0) || // horizontal
      this.checkLine(row, col, 0, -1) || // vertical
      this.checkLine(row, col, -1, -1) || // diagonal hacia arriba
      this.checkLine(row, col, -1, 1) // diagonal hacia abajo
    );
  }

  private checkLine(row: number, col: number, dRow: number, dCol: number): boolean {
    let count = 0;
    for (let i = -3; i <= 3; i++) {
      let r = row + i * dRow;
      let c = col + i * dCol;
      if (r >= 0 && r < 6 && c >= 0 && c < 7 && this.grid[r][c] === this.currentPlayer) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  }
}

