import QueenIcon from "../../assets/QueenIcon";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Queen extends Figure {

  constructor(color: Colors, name: FigureNames) {
    super(color, name)
    this.icon = QueenIcon({color})
  }
}
