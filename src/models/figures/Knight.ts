import KnightIcon from "../../assets/KnightIcon";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Knight extends Figure {

  constructor(color: Colors, name: FigureNames) {
    super(color, name)
    this.icon = KnightIcon({color})
  }
}
