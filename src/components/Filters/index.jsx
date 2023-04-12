import React from "react";
import "./index.css";
import Button from "../Button";

function Filters({ changeFilter }) {
  return (
    <>
      <Button
        customClass="btn_filter"
        onClick={() => changeFilter("all")}
        text="All"
      />
      <Button
        customClass="btn_filter"
        onClick={() => changeFilter("active")}
        text="Active"
      />
      <Button
        customClass="btn_filter"
        onClick={() => changeFilter("completed")}
        text="Completed"
      />
    </>
  );
}

export default Filters;