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
				element: <HomePage />,
			},
			{
				path: 'catalogue',
				element: <CataloguePage />,
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

export const router = createBrowserRouter(routes, {
	basename: '/pet-cinemania/',
});
