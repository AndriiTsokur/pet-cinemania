import { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './BluredBackdrop.module.css';
import { useLockBodyScroll } from '@/utils';
import { selectService, toggleModal } from '@/redux';

type PropsT = {
	children?: ReactElement;
};

export const BluredBackdrop: React.FC<PropsT> = ({ children }) => {
	const dispatch = useDispatch();
	const {
		screen: { modalIsOpen },
	} = useSelector(selectService);

	useLockBodyScroll();

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.code === 'Escape' && modalIsOpen) {
				dispatch(toggleModal());
				document.removeEventListener('keydown', handleEsc);
			}
		};

		document.addEventListener('keydown', handleEsc);

		return () => {
			document.removeEventListener('keydown', handleEsc);
		};
	}, []);

	return <div className={styles.backdrop}>{children}</div>;
};
