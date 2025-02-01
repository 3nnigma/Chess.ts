import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";


export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if((i+j) % 2 !== 0){
          row.push(new Cell(this, j, i, Colors.BLACK, null))
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null))
        }
      }
      this.cells.push(row)
    }
  }

  public addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.WHITE, this.cells[6][i])
      new Pawn(Colors.BLACK, this.cells[1][i])
    }
  }

  public addKings() {
    new King(Colors.BLACK, this.cells[0][4])
    new King(Colors.WHITE, this.cells[7][4])
  }

  public addQueens() {
    new Queen(Colors.BLACK, this.cells[0][3])
    new Queen(Colors.WHITE, this.cells[7][3])
  }

  public addBishops(){
    new Bishop(Colors.BLACK, this.cells[0][5])
    new Bishop(Colors.BLACK, this.cells[0][2])
    new Bishop(Colors.WHITE, this.cells[7][2])
    new Bishop(Colors.WHITE, this.cells[7][5])
  }

  public addKnights() {
    new Knight(Colors.BLACK, this.cells[0][6])
    new Knight(Colors.BLACK, this.cells[0][1])
    new Knight(Colors.WHITE, this.cells[7][1])
    new Knight(Colors.WHITE, this.cells[7][6])
  }

  public addRooks() {
    new Rook(Colors.BLACK, this.cells[0][7])
    new Rook(Colors.BLACK, this.cells[0][0])
    new Rook(Colors.WHITE, this.cells[7][0])
    new Rook(Colors.WHITE, this.cells[7][7])
  }

  public initFigures() {
    this.addPawns()
    this.addKings()
    this.addQueens()
    this.addBishops()
    this.addKnights()
    this.addRooks()
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i]
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target)
      }
    }
  }

  public updateBoard() {
    const newBoard = new Board();
    newBoard.cells = this.cells
    return newBoard
  }

  public deleteFigures() {
    console.log(this.cells)
    this.cells[0][1].figure = null
  }
}
