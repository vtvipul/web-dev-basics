import React from "react";

function Button({ title, classname, onClick, color }) {
	return (
		<button
			className={classname}
			onClick={onClick}
			style={{ backgroundColor: color }}
		>
			{title}
		</button>
	);
}

Button.defaultProps = {
	title: "button",
	classname: "btn",
};

export default Button;
