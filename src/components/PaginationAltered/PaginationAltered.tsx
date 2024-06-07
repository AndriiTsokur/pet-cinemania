import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import styles from './PaginationAltered.module.css';
import { selectLocal, selectService } from '@/redux';

type PropsT = {
	pageName: string;
	totalPages: number;
};

export const PaginationAltered: React.FC<PropsT> = ({
	pageName,
	totalPages,
}) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const {
		screen: { deviceType },
	} = useSelector(selectService);
	const { isDarkMode } = useSelector(selectLocal);
	const currentPage = searchParams.get('page')
		? Number(searchParams.get('page'))
		: 1;
	const query = searchParams.get('query') || '';

	let paginationSize: any;
	switch (deviceType) {
		case 'tablet': {
			paginationSize = 'medium';
			break;
		}
		case 'desktop': {
			paginationSize = 'large';
			break;
		}
		default: {
			paginationSize = 'small';
			break;
		}
	}

	const colorPrimary = isDarkMode ? '#ffffff' : '#111111';
	const colorGrey = isDarkMode ? '#b7b7b7' : '#595959';

	const handlePagination = (_: any, page: number) => {
		if (query) {
			navigate(`/${pageName}?query=${query}&page=${page}`);
		} else {
			navigate(
				page === 1 ? `/${pageName}?page=1` : `/${pageName}?page=${page}`,
			);
		}
	};

	return (
		<div className={styles.paginationWrapper}>
			<Pagination
				count={totalPages}
				variant="outlined"
				disabled={totalPages <= 1}
				onChange={handlePagination}
				page={currentPage}
				size={paginationSize}
				sx={{
					'& .MuiPaginationItem-root': {
						borderColor: colorGrey,
						color: colorPrimary,
					},
					'& .Mui-selected': {
						borderColor: colorGrey,
						background:
							'linear-gradient(144.81deg, rgb(255, 194, 38) 9.233%,rgb(248, 65, 25) 92.699%)',
						color: 'colorPrimary',
					},
				}}
			/>
		</div>
	);
};
