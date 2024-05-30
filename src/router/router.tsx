import { lazy } from 'react';
import { Layout } from '@/components';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@/pages';

const HomePage = lazy(() =>
	import('@/pages/HomePage').then((module) => ({ default: module.HomePage })),
);
const CataloguePage = lazy(() =>
	import('@/pages/CataloguePage').then((module) => ({
		default: module.CataloguePage,
	})),
);
const LibraryPage = lazy(() =>
	import('@/pages/LibraryPage').then((module) => ({
		default: module.LibraryPage,
	})),
);

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
			},
			{
				path: 'library',
				element: <LibraryPage />,
				linkText: 'My Library',
			},
		],
	},
];

export const navData = routes[0].children.filter((route) => route.linkText);

export const router = createBrowserRouter(routes, {
	basename: '/pet-cinemania/',
});
