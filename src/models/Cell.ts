import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors
  figure: Figure | null;
  board: Board;
  available: boolean;
  id: number;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null,
  ) {
    this.board = board;
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.available = false;
    this.id = Math.random()
  }

  setFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this
  }

  public moveFigure(target: Cell) {
    if(this.figure && this.figure?.canMove(target)){
      this.figure.moveFigure(target)
      target.setFigure(this.figure)
      this.figure = null
    }
  }

  isEmpty() {
    return this.figure === null;
  }

  public canVerticalMove(target: Cell) {
    if(this.x !== target.x) return false

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y)

    for (let y = min + 1; y < max; y++) {
      if (!this.board.cells[y][this.x].isEmpty()) return false;
    }
    return true
  }

  public canHorizontalMove(target: Cell) {
    if (this.y !== target.y) return false;

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x)

    for (let x = min + 1; x < max; x++){
      if (!this.board.cells[this.y][x].isEmpty()) return false;
    }
    return true
  }

  public canDiagonalMove(target: Cell) {
    const deltaX = Math.abs(this.x-target.x)
    const deltaY = Math.abs(this.y-target.y)

    if (deltaX !== deltaY) return false;

    const directX = this.x < target.x ? 1 : -1;
    const directY = this.y < target.y ? 1 : -1;

    for (let i = 1; i < deltaY; i++) {
      if (!this.board.cells[this.y + directY * i][this.x + directX * i].isEmpty()) return false;
    }

    return true
  }
}
