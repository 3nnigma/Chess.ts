import { Colors } from "../Colors";
import { Cell } from "../Cell";
import { ReactNode } from "react";

export enum FigureNames {
  FIGURE = "Figure",
  KING = "King",
  KNIGHT = "Knight",
  PAWN = "Pawn",
  QUEEN = "Queen",
  ROOK = "Rook",
  BISHOP = "Bishop",
}

export class Figure {
  color: Colors;
  name: FigureNames;
  cell: Cell;
  icon: ReactNode | null;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this
    this.icon = null;
    this.name = FigureNames.FIGURE
    this.id = Math.random();
  }

  public canMove(target: Cell): boolean {
    if (target.figure?.color === this.color || target.figure?.name === FigureNames.KING) return false;
    return true;
  }

  public moveFigure(_target: Cell): void {}
}
