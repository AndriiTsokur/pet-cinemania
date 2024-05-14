import styles from './Button.module.css';

type PropsT = {
	children: string;
	onClick: () => void;
	isGradient: boolean;
};

export const Button: React.FC<PropsT> = ({ children, isGradient, onClick }) => {
	return (
		<div className={styles.container}>
			<button
				type="button"
				className={`${styles.button} ${isGradient ? styles.gradient : styles.regular}`}
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
};
