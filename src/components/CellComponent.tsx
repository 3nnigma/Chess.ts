import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell,
  char: string
}

const CellComponent: FC<CellProps> = ({cell, char}) => {

  return <td data-col={char} className={"square " +  cell.color}>
    {cell?.figure != null ? cell?.figure.icon : null}
  </td>
}

export default CellComponent;
