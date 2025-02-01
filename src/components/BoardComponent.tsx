import { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";

interface BoardProps {
  board: Board,
  setBoard: (board: Board) => void;
}

const chars = ["A", "B", "C",  "D",  "E", "F",  "G", "H"]

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const select = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
    } else if (cell.figure) {
    setSelectedCell(cell);
    }
  }

  useEffect(() => {
    highlighCells()
  }, [selectedCell])

  const highlighCells = () => {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.updateBoard();
    setBoard(newBoard);
  }

  return  <table className="board">
       {board.cells.map((row, index) => (
         <tr data-line={chars.length - index} key={index}>
           {row.map((cell, index) => (
             <CellComponent cell={cell} key={index} char={chars[index]} selected={selectedCell?.x === cell.x && selectedCell?.y === cell.y} select={select} />
           ))}
         </tr>
       ))}
     </table>
}

export default BoardComponent;
