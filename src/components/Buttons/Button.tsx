import styles from './Button.module.css';

type PropsT = {
	children: string;
	onClick: () => void;
	isGradient: boolean;
	isOutOfColorMode?: boolean;
};

export const Button: React.FC<PropsT> = ({
	children,
	isGradient,
	isOutOfColorMode,
	onClick,
}) => {
	const regularType = isOutOfColorMode
		? styles.regularPermanent
		: styles.regular;

	return (
		<div className={styles.container}>
			<button
				type="button"
				className={`${styles.button} ${isGradient ? styles.gradient : regularType}`}
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
};
