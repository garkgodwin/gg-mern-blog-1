import React from "react";

const FormActions = ({ flow = "col", children }) => {
  return (
    <div className={`form-actions form-actions-${flow}`}>
      {children}
    </div>
  );
};

export default FormActions;
