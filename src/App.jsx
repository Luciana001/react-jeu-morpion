import { useState } from "react";
import Square from './components/Square.jsx';
import calculateWinner from "./components/CalculateWinner.jsx";


// ------ fonction parente -> Board  -------
export default function Board(){

  const [isNext, setIsnext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // afficher quel joueur doit jouer ou a gagné
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "NextPlayer: " + (isNext ? "X" : "O");
  }

  // changer les états et l'affichage au click sur chaque case
  function handleClick(i){

    // verifier que la case clické est vide ou si il y a un gagnant
    if(squares[i] || calculateWinner(squares)) {
      return;
    }
    // faire une copie du tableau
    const nextSquares = squares.slice();
    // alternet entre X et O quand on click grâce à un booleen
    if(isNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    
    setSquares(nextSquares);
    setIsnext(!isNext);
  }

  return (
    <>
      <div className="status" >{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      
    </>
  );
}
