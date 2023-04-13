import React from "react";
import './index.css';

function Button({ text, onClick, customClass, activeFilterClass }) {
  return (
      <button
        className={`btn ${customClass ? customClass : ""} || ${activeFilterClass ? activeFilterClass : ''}`}
        onClick={onClick}
      >
        {text}
      </button>
  );
}

export default Button;
  