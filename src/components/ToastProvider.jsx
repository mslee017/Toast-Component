import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Info Toast!',
      variant: 'info',
    },
    {
      id: crypto.randomUUID(),
      message: 'Success Toast!',
      variant: 'success',
    },
  ]);

  function createToast(message, variant) {
    setToasts([{ id: crypto.randomUUID(), message, variant }, ...toasts]);
  }

  function dismissToast(id) {
    const filteredToasts = toasts.filter(toast => id !== toast.id);
    setToasts(filteredToasts);
  }

  function handleKeyPress(event) {
    if (toasts.length > 0 && event.key === 'Escape') {
      setToasts(toasts => toasts.slice(1));
    } else {
      return;
    }
  }

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast, handleKeyPress }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
