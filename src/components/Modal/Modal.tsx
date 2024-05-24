import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Modal.module.css';
import { toggleModal } from '@/redux';
import { BluredBackdrop } from '../BluredBackdrop';

type PropsT = {
	children?: ReactElement;
};

export const Modal: React.FC<PropsT> = ({ children }) => {
	const dispatch = useDispatch();

	const handleCloseModal = () => dispatch(toggleModal({}));

	return (
		<BluredBackdrop>
			<article className={styles.modal}>
				<button
					type="button"
					className={styles.btnClose}
					onClick={handleCloseModal}
				/>
				<div className={styles.modalWrapper}>{children}</div>
			</article>
		</BluredBackdrop>
	);
};
