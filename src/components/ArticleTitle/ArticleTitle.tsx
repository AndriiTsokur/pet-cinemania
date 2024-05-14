import { ReactNode } from 'react';
import styles from './ArticleTitle.module.css';

type PropsT = {
	children?: ReactNode;
	title: string;
};

export const ArticleTitle: React.FC<PropsT> = ({ children, title }) => {
	return (
		<div className={styles.titleWrapper}>
			<h2 className={styles.title}>{title}</h2>
			{children}
		</div>
	);
};
