import { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './BluredBackdrop.module.css';
import { useLockBodyScroll } from '@/utils';
import { selectService, toggleMobileMenu } from '@/redux';

type PropsT = {
	children?: ReactElement;
};

export const BluredBackdrop: React.FC<PropsT> = ({ children }) => {
	const dispatch = useDispatch();
	const {
		modal: { mobileMenuIsOpen },
	} = useSelector(selectService);

	useLockBodyScroll();

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (mobileMenuIsOpen && e.target === e.currentTarget) {
			dispatch(toggleMobileMenu());
		}
	};

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.code === 'Escape' && mobileMenuIsOpen) {
				console.log(e.code);
				dispatch(toggleMobileMenu());
			}
		};

		mobileMenuIsOpen && document.addEventListener('keydown', handleEsc);

		return () => {
			document.removeEventListener('keydown', handleEsc);
		};
	}, [mobileMenuIsOpen]);

	return (
		<div
			className={
				mobileMenuIsOpen
					? `${styles.backdrop} ${styles.visible}`
					: styles.backdrop
			}
			onClick={handleClick}
		>
			{children}
		</div>
	);
};
