import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
	const { toasts } = React.useContext(ToastContext);

	if (toasts.length === 0) return;
	console.log('toasts: ', toasts);

	return (
		<ol
			className={styles.wrapper}
			role='region'
			aria-live='polite'
			aria-label='Notification'>
			{toasts.map(({ message, variant, id }) => {
				return (
					<li id={id} key={id} className={styles.toastWrapper}>
						<Toast toasts={toasts} id={id} variant={variant}>
							{message}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default React.memo(ToastShelf);
