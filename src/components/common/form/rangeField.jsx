import React from "react";
import PropTypes from "prop-types";

function RangeField({ register, id, label, defaultValue }) {
  console.log("df: ", defaultValue);
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={id}
        type="range"
        {...register(id, { value: +defaultValue })}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </>
  );
}

RangeField.defaultProps = {
  label: "",
  defaultValue: "0",
};

RangeField.propTypes = {
  register: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default RangeField;
