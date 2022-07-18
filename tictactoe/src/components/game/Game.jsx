import React, { useEffect, useState } from "react";
import Board from "./Board";
import Moves from "./Moves";

const Game = () => {
	const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
	const [xTurn, setXTurn] = useState(true);
	const [winnerFound, setWinnerFound] = useState(false);
	const [winner, setWinner] = useState(null);

	useEffect(() => {
		setWinner(calcWinner());
	}, [history]);

	const handleClick = (i) => {
		const squares = history[history.length - 1].squares;
		if (squares[i] !== null || winnerFound) {
			return;
		}
		setHistory(
			history.concat({
				squares: squares.map((el, index) =>
					index == i ? (xTurn ? "X" : "O") : el
				),
			})
		);

		setXTurn(!xTurn);
	};

	const calcWinner = () => {
		const squares = history[history.length - 1].squares;
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				setWinnerFound(true);
				return squares[a];
			}
		}
		return null;
	};

	const jumpTo = (i) => {
		setHistory(history.slice(0, i + 1));
	};

	return (
		<>
			<Board
				squares={history[history.length - 1].squares}
				handleClick={handleClick}
				xTurn={xTurn}
				winner={winner}
			/>
			<ul>
				{history.map((_, i) => (
					<Moves jumpTo={jumpTo} move={i} key={i} />
				))}
			</ul>
		</>
	);
};

export default Game;
