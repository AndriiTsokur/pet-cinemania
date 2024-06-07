import { useNavigate, useParams } from 'react-router-dom';
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
	const {
		screen: { deviceType },
	} = useSelector(selectService);
	const { isDarkMode } = useSelector(selectLocal);
	const { page: pageAddress } = useParams<{ page: string }>();

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
		navigate(page === 1 ? `/${pageName}` : `/${pageName}/${page}`);
	};

	return (
		<div className={styles.paginationWrapper}>
			<Pagination
				count={totalPages}
				variant="outlined"
				disabled={totalPages <= 1}
				onChange={handlePagination}
				page={pageAddress ? Number(pageAddress) : 1}
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
