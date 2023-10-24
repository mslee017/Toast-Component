import React from 'react';

import { ToastContext } from './ToastProvider';

const ICONS_BY_VARIANT = {
  info: 'ℹ️',
  warning: '⚠️',
  success: '✅',
  error: '❌',
};

function Toast({ id, variant, children }) {
  const { dismissToast } = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`toast toast-${variant}`}>
      <div className="toast-icon">{Icon}</div>
      <p className="toast-paragraph">{children}</p>
      <button className="toast-button-close" onClick={() => dismissToast(id)}>
        X
      </button>
    </div>
  );
}

export default Toast;
