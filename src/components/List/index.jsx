import React from "react";
import './index.css';
import Button from "../Button";

function List({ tasks, removeTask, changeStatus }) { 

  return (
    <ul>
      {
        tasks.map(item => {
          const onRemoveTask = () => removeTask(item.id);
          const onChangeStatusHandler = (event => changeStatus(item.id, event.currentTarget.checked));
          
          return (
            <li className={`item ${item.isDone ? 'is-done' : ''}`} 
                key={item.id}>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={onChangeStatusHandler} />
              <span className="item_text">{item.title}</span>
              <Button
                text="x"
                onClickHandler={onRemoveTask}
                customClass="item_btn" />
            </li>
          );
            
        })
      }
    </ul>
  );
}

export default List;