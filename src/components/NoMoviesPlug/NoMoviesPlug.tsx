import { ReactNode } from 'react';
import styles from './NoMoviesPlug.module.css';

type PropsT = {
	children?: ReactNode;
	message: string;
};

export const NoMoviesPlug: React.FC<PropsT> = ({ children, message }) => {
	return (
		<div className={styles.plug}>
			<p className={styles.plugText}>
				OOPS...
				<br />
				We are very sorry!
				<br />
				{message}
			</p>

			{children}
		</div>
	);
};
