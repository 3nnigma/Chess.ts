import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import KingIcon from "../../assets/KingIcon";

export class King extends Figure {
  constructor(color: Colors, name: FigureNames) {
    super(color, name)
    this.icon = KingIcon({color})
  }
}
