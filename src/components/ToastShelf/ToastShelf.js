import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
	const { toasts } = React.useContext(ToastContext);

	if (toasts.length === 0) return;
	console.log('toasts: ', toasts);
	// return (
	// 	<ol className={styles.wrapper}>
	// 		<li className={styles.toastWrapper}>
	// 			<Toast variant='notice'>Example notice toast</Toast>
	// 		</li>
	// 		<li className={styles.toastWrapper}>
	// 			<Toast variant='error'>Example error toast</Toast>
	// 		</li>
	// 	</ol>
	// );

	return (
		<ol className={styles.wrapper}>
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
