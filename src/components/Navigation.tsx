import clsx from "clsx";
import { Link, useLocation } from "react-router";

const Navigation = () => {
	const { pathname } = useLocation();

	return (
		<nav>
			<ul className="flex flex-1 list-none items-center justify-center gap-10">
				{[
					{ path: "/", label: "Home" },
					{ path: "/knowledge", label: "Knowledge" },
					{ path: "/game", label: "Game" },
				].map(({ path, label }) => (
					<li key={path}>
						<Link
							className={clsx(
								"group inline-flex items-center justify-center rounded-md px-4 py-2 font-bold transition-colors hover:bg-gray-800/50",
								{ "bg-gray-800/50": pathname === path },
							)}
							to={path}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
