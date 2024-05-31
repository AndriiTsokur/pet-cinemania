import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material';

import styles from './LibraryPage.module.css';
import { selectLocal } from '@/redux';
import { MovieCard, SelectAltered } from '@/components';
import { LibraryPlug } from './parts';

export const LibraryPage: React.FC = () => {
	const [selectedGenre, setSelectedGenre] = useState('');
	const { movies } = useSelector(selectLocal);

	const handleChange = (e: SelectChangeEvent) => {
		setSelectedGenre(e.target.value);
	};

	const actualGenres = movies
		.reduce<string[]>((prev, movie) => {
			if (movie.genres) {
				movie.genres.forEach((genre) => {
					if (!prev.includes(genre)) {
						prev.push(genre);
					}
				});
			}
			return prev;
		}, [])
		.sort((a, b) => a.localeCompare(b));

	const filteredMovies = selectedGenre
		? movies.filter((movie) => movie.genres?.includes(selectedGenre))
		: [...movies];

	return (
		<article className={styles.article}>
			<div className={styles.hero}>
				<div className={styles.textWrapper}>
					<h1 className={styles.title}>Create Your Dream Cinema</h1>
					<p className={styles.text}>
						Is a guide to designing a personalized movie theater experience with
						the right equipment, customized decor, and favorite films. This
						guide helps you bring the cinema experience into your own home with
						cozy seating, dim lighting, and movie theater snacks
					</p>
				</div>
			</div>

			<SelectAltered
				list={actualGenres}
				label="All genres"
				onChange={handleChange}
				value={selectedGenre}
			/>

			<div className={styles.container}>
				{movies.length === 0 ? (
					<LibraryPlug />
				) : (
					<ul className={styles.cardsList}>
						{filteredMovies.map((movie) => (
							<li key={movie.id} className={styles.cardItem}>
								<MovieCard movie={movie} source="library" />
							</li>
						))}
					</ul>
				)}
			</div>
		</article>
	);
};
