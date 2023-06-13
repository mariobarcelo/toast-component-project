import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
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
						<Toast
							toasts={toasts}
							handleDismiss={handleDismiss}
							id={id}
							variant={variant}>
							{message}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default React.memo(ToastShelf);
