import { NavLink } from 'react-router-dom';

export const CataloguePage: React.FC = () => {
	return (
		<>
			<h2>Catalogue Page</h2>
			<ul>
				<li>
					<NavLink to="/catalogue/1">The Lord Of The Rings</NavLink>
				</li>
				<li>
					<NavLink to="/catalogue/2">The Matrix</NavLink>
				</li>
				<li>
					<NavLink to="/catalogue/3">Dune</NavLink>
				</li>
			</ul>
		</>
	);
};
