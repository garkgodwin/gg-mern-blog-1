import React from "react";
import "./form-selection.css";
const FormSelection = ({ id, options, selected, handleChange }) => {
  return (
    <select
      className="form-selection"
      id={id}
      name={id}
      value={selected}
      onChange={handleChange}
    >
      {options.map((opt) => {
        return (
          <option key={opt.val} value={opt.val}>
            {opt.txt}
          </option>
        );
      })}
    </select>
  );
};

export default FormSelection;
