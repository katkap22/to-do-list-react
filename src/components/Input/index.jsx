import React from "react";
import "./index.css";

class Input extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <>
        <input 
          className="input"
          type="text" 
          value={value}
          placeholder="Введите новую задачу" 
          onChange={onChange}
        />
      </>
    );
  }
  
}

export default Input;
