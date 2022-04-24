import React from "react";
import Button from "./Button";

// function Header(props) {
// either above written method can be used and then props.key
// or the below written method
function Header({ title, onClick, buttonTitle, buttonColor }) {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button classname="btn" title={buttonTitle} onClick={onClick} color={buttonColor}/>
		</header>
	);
}

Header.defaultProps = {
	title: "Header",
};

export default Header;
