type ParamsT = {
	movieId: string;
};

export const fetchMovieDetails = ({ params }: { params: ParamsT }) => {
	// return { name: 'Some movie', id: params.movieId };

	return new Promise((res) => {
		setTimeout(
			() =>
				res({
					name: 'Some STRANGE movie',
					id: params.movieId,
				}),
			3000,
		);
	});
};
