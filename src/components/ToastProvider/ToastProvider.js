import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key.js';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	useEscapeKey(() => {
		setToasts([]);
	});

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
