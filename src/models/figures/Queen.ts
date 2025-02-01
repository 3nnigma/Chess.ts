import QueenIcon from "../../assets/QueenIcon";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Queen extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.icon = QueenIcon({color})
    this.name = FigureNames.QUEEN
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.canVerticalMove(target)) return true;
    if (this.cell.canHorizontalMove(target)) return true;
    if (this.cell.canDiagonalMove(target)) return true;

    return false
  }
}
