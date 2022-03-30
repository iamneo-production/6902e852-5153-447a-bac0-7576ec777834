import React from "react";
import { ErrorMessage, useField } from "formik";

function TextBar({ label, type, ...props }) {
  const [field, meta] = useField(props);
  switch (type) {
    case "select":
      return (
        <div className="mb-2">
          <label
            htmlFor={field.name}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: 17,
            }}
          >
            {label}
          </label>
          <select {...field} {...props} >
            <option>USERORADMIN</option>
            <option value="user">USER</option>
            <option value="admin">ADMIN</option>
          </select>
          <ErrorMessage component="div" className="error" name={field.name} />
        </div>
      );
    default:
      return (
        <div className="mb-2">
          <label
            htmlFor={field.name}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: 17,
            }}
          >
            {label}
          </label>
          <input
            type={type}
            className={`form-control shadow-none ${
              meta.touched && meta.error && "is-invalid"
            }`}
            {...field}
            {...props}
            autoComplete="off"
          />
          <ErrorMessage component="div" className="error" name={field.name} />
        </div>
      );
  }
 
}
export default TextBar;