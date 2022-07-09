import React from "react";
import PropTypes from "prop-types";

function Badge({ name }) {
  return (
    <span className="bg-purple-100 text-purple-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
      {name}
    </span>
  );
}

Badge.defaultProps = {
  name: "",
};

Badge.propTypes = {
  name: PropTypes.string,
};

export default Badge;
