import { ReactElement } from 'react';

import styles from './BluredBackdrop.module.css';
import { useLockBodyScroll } from '@/utils';

type PropsT = {
	children?: ReactElement;
};

export const BluredBackdrop: React.FC<PropsT> = ({ children }) => {
	useLockBodyScroll();

	return <div className={styles.backdrop}>{children}</div>;
};
