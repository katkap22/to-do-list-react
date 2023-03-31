import React from "react";
import './index.css';
import Button from "../Button";

const ListItem = ({ todoName, remove }) => {
  return (
    <div className="item">
      <div className="item_text">
        {todoName}
      </div>

      <Button 
         text="x" 
         onClick={() => {remove(todoName)}} 
         customClass="item_btn" />
    </div>
  );
};

export default ListItem;