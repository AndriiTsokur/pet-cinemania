import axios from 'axios';

export const apiInstance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	method: 'GET',
	headers: { Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` },
});

export const requestParams = {
	configDetails: {
		url: '/configuration',
	},

	genres: {
		url: '/genre/movie/list',
		params: { language: 'en' },
	},

	movieDetails: {
		url: '/movie', // /movie_id OR /movie_id/videos
		params: { language: 'en-US' },
	},

	search: {
		url: '/search/movie',
		params: {
			query: '',
			include_adult: false,
			language: 'en-US',
			page: 1,
		},
	},

	trendingMovies: {
		url: '/trending/movie', // /day | week
		params: { language: 'en-US' },
	},

	upcoming: {
		url: '/movie/upcoming',
		params: {
			include_adult: false,
			include_video: false,
			language: 'en-US',
			page: 1,
			region: 'US',
		},
	},
};
