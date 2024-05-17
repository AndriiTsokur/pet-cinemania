import { RouterProvider } from 'react-router-dom';

// import styles from './App.module.css';
import { router } from '@/router';
import { Loader } from '@/components';

export const App: React.FC = () => {
	return <RouterProvider router={router} fallbackElement={<Loader />} />;
};
