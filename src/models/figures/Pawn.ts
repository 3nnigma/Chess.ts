import PawnIcon from "../../assets/PawnIcon";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Pawn extends Figure {

  constructor(color: Colors, name: FigureNames) {
    super(color, name)
    this.icon = PawnIcon({color})
  }
}
