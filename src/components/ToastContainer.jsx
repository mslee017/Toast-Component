import React, { useEffect } from 'react';
import { ToastContext } from './ToastProvider';
import Toast from './Toast';

function ToastContainer() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className="toast-container">
      {toasts.map(toast => (
        <li key={toast.id}>
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastContainer;
