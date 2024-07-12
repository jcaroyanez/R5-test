import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";

const Home = lazy(() => import('../pages/Home').then(({ Home }) => ({ default: Home })));
const BookStore = lazy(() => import('../pages/BookStore').then(({ BookStore }) => ({ default: BookStore })));

export const ROUTER = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/bookstore',
				element: <BookStore />
			}
		]
	},
]);