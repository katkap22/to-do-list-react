import React from "react";
import './index.css';

function Button({ text, onClick, customClass }) {
  return (
    <button
      className={`btn ${customClass ? customClass : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}



export default Button;
