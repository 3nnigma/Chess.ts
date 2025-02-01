import RookIcon from "../../assets/RookIcon";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Rook extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.name = FigureNames.ROOK
    this.icon = RookIcon({color})
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.canVerticalMove(target)) return true;
    if (this.cell.canHorizontalMove(target)) return true;

    return false
  }
}
