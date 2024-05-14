import styles from './ArticleTitle.module.css';

type PropsT = {
	title: string;
};

export const ArticleTitle: React.FC<PropsT> = ({ title }) => {
	return <h2 className={styles.title}>{title}</h2>;
};
