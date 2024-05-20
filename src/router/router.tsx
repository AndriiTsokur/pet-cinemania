import { Layout } from '@/components';
import { createBrowserRouter } from 'react-router-dom';

import {
	CataloguePage,
	ErrorPage,
	HomePage,
	LibraryPage,
	MovieDetailsPage,
} from '@/pages';

const routes = [
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				path: '',
				element: <HomePage />,
				linkText: 'Home',
			},
			{
				path: 'catalogue',
				element: <CataloguePage />,
				linkText: 'Catalogue',
				// lazy: () => import('@/pages/')
				// children: [
				// 	{
				// 		path: ':movieId',
				// 		element: <MovieDetails />,
				// 		loader: fetchMovieDetails,
				// 	},
				// ],
			},
			{
				path: '/catalogue/:movieId',
				element: <MovieDetailsPage />,
				// loader: fetchMovieDetails,
			},
			{
				path: 'library',
				element: <LibraryPage />,
				linkText: 'My Library',
				// children: [
				// 	{
				// 		path: ':movieId',
				// 		Component: MovieDetails,
				// 		loader: fetchMovieDetails,
				// 	},
				// ],
			},
		],
	},
];

export const navData = routes[0].children.filter((route) => route.linkText);

export const router = createBrowserRouter(routes, {
	basename: '/pet-cinemania/',
});