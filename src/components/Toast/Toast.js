import React from 'react';
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ variant, id, toasts, setToasts, children }) {
	const Icon = ICONS_BY_VARIANT[variant];

	function handleDismiss() {
		const nextToasts = toasts.filter((toast) => {
			return toast.id !== id;
		});

		setToasts(nextToasts);
	}

	return (
		// <div className={`${styles.toast} ${styles.notice}`}>
		// 	<div className={styles.iconContainer}>
		// 		<Info size={24} />
		// 	</div>
		// 	<p className={styles.content}>16 photos have been uploaded</p>
		// 	<button className={styles.closeButton}>
		// 		<X size={24} />
		// 		<VisuallyHidden>Dismiss message</VisuallyHidden>
		// 	</button>
		// </div>
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			<p className={styles.content}>{children}</p>
			<button className={styles.closeButton} onClick={handleDismiss}>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default Toast;
