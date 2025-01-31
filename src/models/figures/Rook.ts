import RookIcon from "../../assets/RookIcon";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Rook extends Figure {

  constructor(color: Colors, name: FigureNames) {
    super(color, name)
    this.icon = RookIcon({color})
  }
}
