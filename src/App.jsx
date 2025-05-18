import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import Navigation from "./components/Navigation";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Knowledge from "./pages/Knowledge";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="py-4 mb-8 border-b border-gray-200">
				<Navigation />
			</header>
			<main className="flex-1 p-4 mx-auto max-w-screen-lg">
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
