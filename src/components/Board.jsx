import Square from "./Square";
import calculateWinner from "./CalculateWinner";

// ------ fonction enfant -> Game  -------
// eslint-disable-next-line react/prop-types
export default function Board({ isNext, squares, onPlay }) {

    // afficher quel joueur doit jouer ou si le joueur a gagné
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "NextPlayer: " + (isNext ? "X" : "O");
    }

    // changer les états et l'affichage au click sur chaque case
    function handleClick(i) {

        // verifier que la case clické est vide ou si il y a un gagnant
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        // faire une copie du tableau
        // eslint-disable-next-line react/prop-types
        const nextSquares = squares.slice();

        // alterner entre X et O quand on click
        if (isNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
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