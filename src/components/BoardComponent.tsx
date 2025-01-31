import { FC } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board,
  setBoard: (board: Board) => void;
}

const chars = ["A", "B", "C",  "D",  "E", "F",  "G", "H"]

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  return  <table className="board">
       {board.cells.map((row, index) => (
         <tr data-line={chars.length - index} key={index}>
           {row.map((cell, index) => (
             <CellComponent cell={cell} key={index} char={chars[index]} />
           ))}
         </tr>
       ))}
     </table>
}

export default BoardComponent;
