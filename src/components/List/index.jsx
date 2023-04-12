import React from "react";
import './index.css';
import Button from "../Button";

function List({tasks, removeTask }) {
  return (
      <ul>
        {tasks.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.isDone} />
            <span className="item_text">{item.title}</span>
            <Button
              text="x"
              onClick={() => removeTask(item.id)}
              customClass="item_btn"
            />
          </li>
        ))}
      </ul>
  );
}

export default List;