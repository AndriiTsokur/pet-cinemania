import { useLayoutEffect } from 'react';

export const useLockBodyScroll = () => {
	useLayoutEffect(() => {
		const scrollBarWidth =
			window.innerWidth - document.documentElement.clientWidth;
		const originalStyle = window.getComputedStyle(document.body).overflow;
		const originalPaddingRight = document.body.style.paddingRight;

		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = `${scrollBarWidth}px`;

		return () => {
			document.body.style.overflow = originalStyle;
			document.body.style.paddingRight = originalPaddingRight;
		};
	}, []);
};
