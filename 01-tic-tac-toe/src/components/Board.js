import { React, useEffect, useState } from 'react';
import Square from './Square';
import { WinningCombinations } from '../WinningCombinations';
import './Board.css';

function Board(props) {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        checkWinner();
        checkIfTie();
    }, [board]);

    useEffect(() => {
        if (winner) {
            alert(`${winner} is the winner!`);
            resetGame();
        }
    }, [winner]);

    const chooseSquare = (square) => {
        setBoard(board.map((value, index) => {
            if (index === square && value === '') {
                return player;
            }

            return value;
        }));

        setPlayer(player === 'X' ? 'O' : 'X');
    }

    const checkWinner = () => {
        WinningCombinations.forEach(combination => {
            const firstPlayer = board[combination[0]];

            if (firstPlayer === '') return;

            let foundWinner = true;

            combination.forEach(square => {
                if (board[square] !== firstPlayer) {
                    foundWinner = false;
                }
            });

            if (foundWinner) {
                setWinner(firstPlayer);
            }
        });
    }

    const checkIfTie = () => {
        if (board.every(square => square !== '')) {
            setWinner('Tie');
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setPlayer('X');
        setWinner(null);
    }

    return (
        <div className="board">
            <div className="row">
                <Square val={board[0]} chooseSquare={() => { chooseSquare(0) }} />
                <Square val={board[1]} chooseSquare={() => { chooseSquare(1) }} />
                <Square val={board[2]} chooseSquare={() => { chooseSquare(2) }} />
            </div>
            <div className="row">
                <Square val={board[3]} chooseSquare={() => { chooseSquare(3) }} />
                <Square val={board[4]} chooseSquare={() => { chooseSquare(4) }} />
                <Square val={board[5]} chooseSquare={() => { chooseSquare(5) }} />
            </div>
            <div className="row">
                <Square val={board[6]} chooseSquare={() => { chooseSquare(6) }} />
                <Square val={board[7]} chooseSquare={() => { chooseSquare(7) }} />
                <Square val={board[8]} chooseSquare={() => { chooseSquare(8) }} />
            </div>
        </div>
    );
}

export default Board;