import React from "react";
import PropTypes from "prop-types";

function TextAreaField({
  register,
  label,
  id,
  placeholder,
  rows,
  options,
  error,
}) {
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
        {...register(id, { ...options })}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
      {error && <p className="text-[#f84147] text-[12px] mt-1 pl-1">{error}</p>}
    </div>
  );
}

TextAreaField.defaultProps = {
  label: "",
  placeholder: "",
  rows: 3,
  options: {},
  error: "",
};

TextAreaField.propTypes = {
  register: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  options: PropTypes.object,
  error: PropTypes.string,
};

export default TextAreaField;
