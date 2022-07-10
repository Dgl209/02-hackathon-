import React from "react";
import PropTypes from "prop-types";

function ProgressBar({ color, completed, label }) {
  return completed ? (
    <>
      <div className="font-semibold">{label}</div>
      <div className="w-1/4 bg-gray-200 rounded-full h-5 ">
        <div
          style={{ width: `${completed}%` }}
          className={` ${color} text-s font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg h-5  `}
        >
          {`${completed}%`}
        </div>
      </div>
    </>
  ) : null;
}

ProgressBar.defaultProps = {
  completed: null,
};

ProgressBar.propTypes = {
  color: PropTypes.string.isRequired,
  completed: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default ProgressBar;
