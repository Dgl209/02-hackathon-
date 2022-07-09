import React from "react";
import PropTypes from "prop-types";
import { btnStylesConstants } from "../../../utils/constants";

function Button({ color, onClick: handleClick, name, type }) {
  const getButtonClasses = () =>
    btnStylesConstants[color] || btnStylesConstants.default;

  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      onClick={handleClick}
      className={getButtonClasses()}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  onClick: null,
  color: "default",
};

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

export default Button;
