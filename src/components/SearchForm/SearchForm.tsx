import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.css';
import iconSearch from '@/assets/images/icon-search.svg';
import { setQuery } from '@/redux';

type PropsT = {
	onSubmit: (inputState: string) => void;
};

export const SearchForm: React.FC<PropsT> = ({ onSubmit }) => {
	const dispatch = useDispatch();
	const [inputState, setInputState] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current?.value === '' || inputState === '') {
			dispatch(setQuery(''));
		}
	}, [dispatch, inputState, inputRef]);

	const handleInput = (e: any) => {
		const input = e.target.value.trimStart();
		setInputState(input.replaceAll('  ', ' '));
	};

	const handleClear = () => {
		setInputState('');
		dispatch(setQuery(''));
		if (inputRef.current) inputRef.current.focus();
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (inputState) onSubmit(inputState);
		dispatch(setQuery(inputState));
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
