import BishopIcon from "../../assets/BishopIcon";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Bishop extends Figure {

  constructor(color: Colors, name: FigureNames) {
    super(color, name)
    this.icon = BishopIcon({color})
  }
}
