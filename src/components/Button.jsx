import React from 'react';
import '../app.scss';

function Button({ children, bgColor, textColor }) {
  return (
    <button
      className="my-custom-button"
      style={{
        '--bg-color': bgColor,
        '--text-color': textColor,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
