import { useParams } from 'react-router-dom';

export const MovieDetailsPage: React.FC = () => {
	const { movieId } = useParams();
	// const { name, id } = useLoaderData();

	return (
		<>
			<h2>Movie Details</h2>
			<p>Movie Id: {movieId}</p>
			<p>{/* {id} : {name} */}</p>
		</>
	);
};
