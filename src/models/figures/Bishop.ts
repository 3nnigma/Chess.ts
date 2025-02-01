import BishopIcon from "../../assets/BishopIcon";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Bishop extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.icon = BishopIcon({color})
    this.name = FigureNames.BISHOP
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.canDiagonalMove(target)) return true;

    return false;
  }
}
