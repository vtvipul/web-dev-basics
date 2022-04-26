import { Link } from "react-router-dom";

function Footer() {
	return (
		<div>
			<p>Copyright &copy;</p>
			<Link to="/about">About</Link>
		</div>
	);
}

export default Footer;
