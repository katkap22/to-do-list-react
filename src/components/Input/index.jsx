import React from "react";
import "./index.css";

function Input({ value, onChangeInput, addTaskEnter }) {
    return (
      <input
        className="input"
        type="text"
        value={value}
        placeholder="Введите новую задачу"
        onChange={onChangeInput}
        onKeyPress={addTaskEnter}
      />
    );
}

export default Input;
