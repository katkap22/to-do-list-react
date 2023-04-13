import React from "react";
import "./index.css";

function Input({ value, onChangeInput, addTaskEnter, error }) {
    return (
      <input
        className={`input ${error ? 'error' : ''}`}
        type="text"
        value={value}
        placeholder="Введите новую задачу"
        onChange={onChangeInput}
        onKeyPress={addTaskEnter}
      />
    );
}

export default Input;
