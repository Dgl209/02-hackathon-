import React from "react";
import PropTypes from "prop-types";

function TextAreaField({ register, label, id, placeholder, rows }) {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        {...register(id)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}

TextAreaField.defaultProps = {
  label: "",
  placeholder: "",
  rows: 3,
};

TextAreaField.propTypes = {
  register: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

export default TextAreaField;
