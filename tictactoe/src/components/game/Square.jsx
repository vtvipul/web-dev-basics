import React, { useState } from "react";
import "./css/square.css";

const Square = ({ value, onClick }) => {
	return (
		<button className="square" onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
