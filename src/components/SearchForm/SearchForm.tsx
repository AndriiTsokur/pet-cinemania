import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './SearchForm.module.css';
import iconSearch from '@/assets/images/icon-search.svg';
import { setQuery } from '@/redux';

type PropsT = {
	onSubmit: (inputState: string) => void;
	initialQuery: string;
};

export const SearchForm: React.FC<PropsT> = ({ onSubmit, initialQuery }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [inputState, setInputState] = useState(initialQuery);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current?.value === '' || inputState === '') {
			dispatch(setQuery(''));
		}
	}, [dispatch, inputState, inputRef]);

	useEffect(() => {
		setInputState(initialQuery);
	}, [initialQuery]);

	const handleInput = (e: any) => {
		const input = e.target.value.trimStart();
		setInputState(input.replaceAll('  ', ' ').toLowerCase());
	};

	const handleClear = () => {
		setInputState('');
		dispatch(setQuery(''));
		if (inputRef.current) inputRef.current.focus();
		navigate('/catalogue?page=1');
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (inputState) {
			onSubmit(inputState);
		}

		dispatch(setQuery(inputState));
		navigate(`/catalogue?query=${inputState}&page=1`);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				type="text"
				className={styles.input}
				value={inputState}
				onChange={handleInput}
				ref={inputRef}
				placeholder="Search"
			/>
			{inputState && (
				<button
					type="button"
					className={styles.buttonClear}
					onClick={handleClear}
				/>
			)}
			<button type="submit" className={styles.buttonSubmit}>
				<img src={iconSearch} className={styles.iconSearch} alt="Search Icon" />
			</button>
		</form>
	);
};
