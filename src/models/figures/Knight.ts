import KnightIcon from "../../assets/KnightIcon";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Knight extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.icon = KnightIcon({color})
    this.name = FigureNames.KNIGHT
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    const deltaX = Math.abs(this.cell.x-target.x)
    const deltaY = Math.abs(this.cell.y-target.y)

    return (deltaX == 2 && deltaY == 1) || (deltaX == 1 && deltaY == 2);
  }
}
