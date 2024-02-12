'use client'
import React, { useReducer, useEffect } from 'react';
import Button from './button';
import { FaGithubSquare } from 'react-icons/fa';
import Link from 'next/link';
import '@utils/authApp.css'

const boardSize = 3;

const initialState = {
    board: Array(boardSize).fill(null).map(() => Array(boardSize).fill(null)),
    xIsNext: true,
    winner: null,
};

const reducer = (state, action) => {

    const { board, xIsNext } = state;

    switch (action.type) {
        case 'MAKE_MOVE':
            if (state.winner) return state;
            const { row, col } = action.payload;

            if (board[row][col] || state.winner) {
                return state;
            }

            const newBoard = board.map((row) => [...row]);
            newBoard[row][col] = xIsNext ? 'X' : 'O';

            const winner = calculateWinner(newBoard);

            return {
                ...state,
                board: newBoard,
                xIsNext: !xIsNext,
                winner,
            };

        case 'RESET':
            return initialState;

        default:
            return state;
    }
};


function calculateWinner(board) {
    for (let i = 0; i < boardSize; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return board[i][0];
        }
        if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return board[0][i];
        }
    }

    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }

    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
    }

    return null;

}

const TicTacToe: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.winner) {
            alert(`Player ${state.winner} wins!`);
        }
    }, [state.winner]);

    const renderSquare = (row:number, col:number) => (
        <Button state={state} dim={{ row, col }} dispatch={dispatch} />
    );

    return (
        <div className="flex justify-center flex-col items-center">
            <h1 className="font-mono font-black text-6xl pt-10 mb-4 text-center">
                Tic Tac Tao
            </h1>
            <div>

                <div className="grid grid-cols-3 gap-4">
                    {state.board.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-rows-3 gap-4">
                            {row.map((_, colIndex) => (
                                <div key={colIndex}>{renderSquare(rowIndex, colIndex)}</div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="mt-2">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={() => dispatch({ type: 'RESET' })}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <h2 className="flex justify-center font-medium mt-20">
                <Link rel="stylesheet" href="https://github.com/Lakshaybogal" >
                    <span className="flex justify-center items-center text-5xl font-normal pb-2">
                        <FaGithubSquare />
                    </span>

                    Github Link
                </Link>
            </h2>
        </div>
    );
};

export default TicTacToe;

