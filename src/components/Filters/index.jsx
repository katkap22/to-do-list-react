import React from "react";
import "./index.css";
import Button from "../Button";

function Filters({ changeFilter, filter}) {
  return (
    <>
      <Button
        activeFilterClass={filter === 'all' ? "active-filter" : ''}
        customClass="btn_filter"
        onClick={() => changeFilter("all")}
        text="All"
      />
      <Button
        activeFilterClass={filter === 'active' ? "active-filter" : ''}
        customClass="btn_filter"
        onClick={() => changeFilter("active")}
        text="Active"
      />
      <Button
        activeFilterClass={filter === 'completed' ? "active-filter" : ''}
        customClass="btn_filter"
        onClick={() => changeFilter("completed")}
        text="Completed"
      />
    </>
  );
}

export default Filters;