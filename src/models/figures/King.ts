import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import KingIcon from "../../assets/KingIcon";
import { Cell } from "../Cell";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.icon = KingIcon({color})
    this.name = FigureNames.KING
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    const deltaX = Math.abs(this.cell.x-target.x)
    const deltaY = Math.abs(this.cell.y-target.y)

    return (deltaX == 1 && deltaY == 0) ||  (deltaX == 0 && deltaY == 1) || (deltaX == 1 && deltaY == 1)
  }
}
