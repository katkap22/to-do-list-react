import React from "react";
import "./index.css";
import Button from "../Button";

function Filters({ changeFilter, filter}) {
  
  return (
    <>
      <Button
        customClass={`btn_filter ${filter === "all" ? "active-filter" : ""}`}
        onClickHandler={() => changeFilter("all")}
        text="All"
      />
      <Button
        customClass={`btn_filter ${filter === "active" ? "active-filter" : ""}`}
        onClickHandler={() => changeFilter("active")}
        text="Active"
      />
      <Button
        customClass={`btn_filter ${filter === "completed" ? "active-filter" : ""}`}
        onClickHandler={() => changeFilter("completed")}
        text="Completed"
      />
    </>
  );
}

export default Filters;