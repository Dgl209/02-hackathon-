import React from "react";
import PropTypes from "prop-types";

function TextField({ register, label, id, type, placeholder, options, error }) {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id, { ...options })}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {error && <p className="text-[#f84147] text-[12px] mt-1 pl-1">{error}</p>}
    </div>
  );
}

TextField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  options: {},
  error: "",
};

TextField.propTypes = {
  register: PropTypes.func.isRequired,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.object,
  error: PropTypes.string,
};

export default TextField;
