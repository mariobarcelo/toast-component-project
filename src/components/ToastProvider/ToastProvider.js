import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	React.useEffect(() => {
		function handleDismissAllToasts(event) {
			if (event.key === 'Escape') {
				setToasts([]);
			}
		}

		window.addEventListener('keydown', handleDismissAllToasts);

		// Cleanup function
		return () =>
			window.removeEventListener('keydown', handleDismissAllToasts);
	}, []);

	function createToast(message, variant) {
		const nextToast = { message, variant, id: crypto.randomUUID() };
		console.log(nextToast);
		setToasts([...toasts, nextToast]);
	}

	function dismissToast(id) {
		const nextToasts = toasts.filter((toast) => {
			return toast.id !== id;
		});
		setToasts(nextToasts);
	}

	return (
		<ToastContext.Provider
			value={{ toasts, createToast, dismissToast }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
