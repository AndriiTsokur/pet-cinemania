import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectService } from '@/redux';

export const useLockBodyScroll = () => {
	const {
		modal: { mobileMenuIsOpen },
	} = useSelector(selectService);

	useLayoutEffect(() => {
		const scrollBarWidth =
			window.innerWidth - document.documentElement.clientWidth;
		const originalStyle = window.getComputedStyle(document.body).overflow;
		const originalPaddingRight = document.body.style.paddingRight;

		if (mobileMenuIsOpen) {
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${scrollBarWidth}px`;
		}

		return () => {
			document.body.style.overflow = originalStyle;
			document.body.style.paddingRight = originalPaddingRight;
		};
	}, [mobileMenuIsOpen]);
};
