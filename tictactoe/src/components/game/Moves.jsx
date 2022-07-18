import React from "react";

const Moves = ({ jumpTo, move }) => {
	return (
		<li>
			<button onClick={() => jumpTo(move)}>
				{move === 0 ? "START NEW GAME" : `Go to Move #${move}`}
			</button>
		</li>
	);
};

export default Moves;
