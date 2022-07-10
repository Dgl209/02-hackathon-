import React from "react";
import PropTypes from "prop-types";

function Badge({ name, color }) {
  return (
    <span
      className={
        "bg-purple-100 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 text-" +
        color
      }
    >
      {name}
    </span>
  );
}

Badge.defaultProps = {
  name: "",
  color: "text-purple-800 ",
};

Badge.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Badge;
