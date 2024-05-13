import { useRouteError } from 'react-router-dom';

type CustomError = {
	status: number;
	statusText: string;
	error: {
		message: string;
	};
};

export const ErrorPage: React.FC = () => {
	const error: CustomError | any = useRouteError();
	return (
		<>
			<p>Something went wrong...</p>
			<p>Error: {error.statusText ?? error.message}</p>
		</>
	);
};
