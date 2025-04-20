import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/knowledge">Knowledge</Link>
				</li>
				<li>
					<Link to="/game">Game</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
