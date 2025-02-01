import PawnIcon from "../../assets/PawnIcon";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Pawn extends Figure {
  isFirstMove: boolean = true
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.icon = PawnIcon({color})
    this.name = FigureNames.PAWN
  }

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    const direct = this.cell.figure?.color === Colors.WHITE ? 1 : -1;
    const firstDirect = direct * 2 ;
    const delta = this.cell.y - target.y

    const enemyCell = this.cell.board.cells[target.y][target.x]

    if (((delta === direct ||
      (delta === firstDirect && this.isFirstMove &&  this.cell.board.cells[target.y+direct][target.x].isEmpty())))
      && this.cell.x === target.x
      && enemyCell.isEmpty()) return true;

    if (delta === direct
      && (this.cell.x === target.x - 1 || this.cell.x === target.x + 1)
      && !enemyCell.isEmpty() && enemyCell.figure?.color != this.color) return true;

    return false;
  }

  public moveFigure(target: Cell): void {
    super.moveFigure(target);
    this.isFirstMove = false;
  }
}
