import React from "react";
import './index.css';

function Button({ text, customClass, onClickHandler }) {
  return (
      <button
        className={`btn ${customClass ? customClass : ""}`}
        onClick={onClickHandler}
      >
        {text}
      </button>
  );
}

export default Button;
  