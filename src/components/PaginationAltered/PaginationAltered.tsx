import { useNavigate, useParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import styles from './PaginationAltered.module.css';
import { MoviesDataT } from '@/utils';

type PropsT = {
	data: MoviesDataT | null;
	pageName: string;
};

export const PaginationAltered: React.FC<PropsT> = ({ data, pageName }) => {
	const navigate = useNavigate();
	const { page: pageAddress } = useParams<{ page: string }>();

	const handlePagination = (_: any, page: number) => {
		navigate(page === 1 ? `/${pageName}` : `/${pageName}/${page}`);
	};

	return (
		<div className={styles.paginationWrapper}>
			<Pagination
				count={data ? data.total_pages / 2 : 0}
				variant="outlined"
				color="primary"
				disabled={!data || data.total_pages <= 1}
				onChange={handlePagination}
				page={pageAddress ? Number(pageAddress) : 1}
			/>
		</div>
	);
};
