import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell
  char: string
  selected: boolean
  select: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, char, selected, select}) => {

  return <td onClick={() => select(cell)}
      data-col={char} className={["square", cell.color, selected ? 'selected': ''].join(' ')}
      style={{background: cell.available && cell.figure ? "green": ""}}
    >
      {cell.available && !cell.figure && <div className={"avaiable"} />}
    {cell.figure && cell.figure.icon}
  </td>
}

export default CellComponent;
