import { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './BluredBackdrop.module.css';
import { useLockBodyScroll } from '@/utils';
import { selectService, toggleMobileMenu, toggleModal } from '@/redux';

type PropsT = {
	children?: ReactElement;
};

export const BluredBackdrop: React.FC<PropsT> = ({ children }) => {
	const dispatch = useDispatch();
	const {
		modal: { mobileMenuIsOpen, modalIsOpen },
	} = useSelector(selectService);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (mobileMenuIsOpen && e.target === e.currentTarget) {
			dispatch(toggleMobileMenu());
		} else if (modalIsOpen && e.target === e.currentTarget) {
			dispatch(toggleModal({}));
		}
	};

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.code === 'Escape' && mobileMenuIsOpen) {
				dispatch(toggleMobileMenu());
			} else if (e.code === 'Escape' && modalIsOpen) {
				dispatch(toggleModal({}));
			}
		};

		(mobileMenuIsOpen || modalIsOpen) &&
			document.addEventListener('keydown', handleEsc);

		return () => {
			document.removeEventListener('keydown', handleEsc);
		};
	}, [mobileMenuIsOpen, modalIsOpen]);

	useLockBodyScroll();

	return (
		<div
			className={
				modalIsOpen
					? `${styles.backdrop} ${styles.overTopMenu}`
					: styles.backdrop
			}
			onClick={handleClick}
		>
			{children}
		</div>
	);
};
