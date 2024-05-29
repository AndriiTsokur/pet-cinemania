import { useDispatch, useSelector } from 'react-redux';

import styles from './Modal.module.css';
import { selectService, toggleModal } from '@/redux';
import { MovieDetailsPage, MovieTrailerPage } from '@/pages';
import { BluredBackdrop } from '@/components';

export const Modal: React.FC = () => {
	const dispatch = useDispatch();
	const {
		modal: { modalType },
	} = useSelector(selectService);

	const handleCloseModal = () => dispatch(toggleModal({}));

	return (
		<BluredBackdrop>
			<article className={styles.modal}>
				<button
					type="button"
					className={styles.btnClose}
					onClick={handleCloseModal}
				/>
				<div className={styles.modalWrapper}>
					{modalType === 'details' ? (
						<MovieDetailsPage />
					) : (
						<MovieTrailerPage />
					)}
				</div>
			</article>
		</BluredBackdrop>
	);
};
