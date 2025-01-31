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
  icon: ReactNode | null;
  id: number;

  constructor(color: Colors, name: FigureNames) {
    this.color = color;
    this.name = name;
    this.icon = null;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell): void {}
}
