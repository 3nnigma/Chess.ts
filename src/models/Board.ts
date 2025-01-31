import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { FigureNames } from "./figures/Figure";
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
          row.push(new Cell(j, i, Colors.BLACK, null))
        } else {
          row.push(new Cell(j, i, Colors.WHITE, null))
        }
      }
      this.cells.push(row)
    }
  }

  addPawns() {
    for (let i = 0; i < 8; i++) {
      this.cells[1][i].figure = new Pawn(Colors.BLACK, FigureNames.PAWN)
      this.cells[6][i].figure = new Pawn(Colors.WHITE, FigureNames.PAWN)
    }
  }

  addKings() {
    this.cells[0][4].figure = new King(Colors.BLACK, FigureNames.KING)
    this.cells[7][4].figure = new King(Colors.WHITE, FigureNames.KING)
  }

  addQueens() {
    this.cells[0][3].figure = new Queen(Colors.BLACK, FigureNames.QUEEN)
    this.cells[7][3].figure = new Queen(Colors.WHITE, FigureNames.QUEEN)
  }

  addBishops(){
    this.cells[0][5].figure = new Bishop(Colors.BLACK, FigureNames.BISHOP)
    this.cells[0][2].figure = new Bishop(Colors.BLACK, FigureNames.BISHOP)
    this.cells[7][2].figure = new Bishop(Colors.WHITE, FigureNames.BISHOP)
    this.cells[7][5].figure = new Bishop(Colors.WHITE, FigureNames.BISHOP)
  }

  addKnights() {
    this.cells[0][6].figure = new Knight(Colors.BLACK, FigureNames.KNIGHT)
    this.cells[0][1].figure = new Knight(Colors.BLACK, FigureNames.KNIGHT)
    this.cells[7][1].figure = new Knight(Colors.WHITE, FigureNames.KNIGHT)
    this.cells[7][6].figure = new Knight(Colors.WHITE, FigureNames.KNIGHT)
  }

  addRooks() {
    this.cells[0][7].figure = new Rook(Colors.BLACK, FigureNames.ROOK)
    this.cells[0][0].figure = new Rook(Colors.BLACK, FigureNames.ROOK)
    this.cells[7][0].figure = new Rook(Colors.WHITE, FigureNames.ROOK)
    this.cells[7][7].figure = new Rook(Colors.WHITE, FigureNames.ROOK)
  }

  initFigures() {
    this.addPawns()
    this.addKings()
    this.addQueens()
    this.addBishops()
    this.addKnights()
    this.addRooks()
    let tempFigure = this.cells[1][0].figure
    this.cells[1][0].figure = null
    this.cells[3][0].figure = tempFigure
  }

  deleteFigures() {
    console.log(this.cells)
    this.cells[0][1].figure = null
  }
}
