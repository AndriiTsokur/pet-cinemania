import styles from './Footer.module.css';

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<p>© 2024 All Rights Reserved.</p>
			<p>
				Designed by{' '}
				<a
					href="https://goit.global/"
					target="_blank"
					rel="noreferrer noopener"
				>
					GoIT Students.
				</a>
			</p>
			<p>
				Developed by{' '}
				<a
					href="https://www.linkedin.com/in/andrii-tsokur/"
					target="_blank"
					rel="noreferrer noopener"
				>
					Andrii Tsokur
				</a>
			</p>
		</footer>
	);
};
