import { useEffect, useState } from "react";
import "./App.css";
import { Board } from "./models/Board";
import BoardComponent from "./components/BoardComponent";


function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart();
  }, [])

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.initFigures()
    setBoard(newBoard)
  }

  return <div>
    <BoardComponent board={board} setBoard={setBoard}/>
  </div>;
}

export default App;


// for (let i = 1; i < 9; i++) {
//     let tr = document.createElement('tr');
//     tr.dataset.line = i
//     for (let j = 1; j < 9; j++) {
//         let td = document.createElement('td');
//         td.dataset.col = cols[j-1];
//         td.dataset.line = i;
//         td.className = (i%2 === j%2) ? "white square" : "black square";
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.querySelector("div").appendChild(table);
