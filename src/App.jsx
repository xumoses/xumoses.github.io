import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Knowledge from "./pages/Knowledge";
import "./App.css";

const Layout = () => {
	return (
		<div className="App">
			<header>
				<Navigation />
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "knowledge",
				element: <Knowledge />,
			},
			{
				path: "game",
				element: <Game />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
