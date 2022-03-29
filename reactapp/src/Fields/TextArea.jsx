import React from "react";
import { ErrorMessage, useField } from "formik";

function Textfield({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div classname="form-group mb-2">
      <label htmlFor={field.name}>{label}</label>
      <textarea
        className={`form-control  ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        id="exampleFormControlInput1"
        autoComplete="off"
      />
      <ErrorMessage name={field.name} className="error" component="div" />
    </div>
  );
}
export default Textfield;
