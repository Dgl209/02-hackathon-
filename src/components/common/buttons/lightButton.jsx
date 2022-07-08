import React from "react";
import PropTypes from "prop-types";

function LightButton({ type, name, onClick: handleClick }) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      onClick={handleClick}
      className="text-gray-900 bg-white border border-gray-300 focus:outline-none
      hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg
      text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600
      dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      {name}
    </button>
  );
}

LightButton.defaultProps = {
  type: "button",
  onClick: null,
};

LightButton.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default LightButton;
