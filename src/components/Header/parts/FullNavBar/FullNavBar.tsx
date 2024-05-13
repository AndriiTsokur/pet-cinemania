import { NavLink } from 'react-router-dom';
// import styles from './FullNavBar.module.css';
// import logo from '@/assets/images/logo.svg';

export const FullNavBar: React.FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/catalogue">Catalogue</NavLink>
				</li>
				<li>
					<NavLink to="/library">Library</NavLink>
				</li>
			</ul>
		</nav>
	);
};
