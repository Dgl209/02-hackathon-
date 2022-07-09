import React from "react";
import PropTypes from "prop-types";

const List = (Component) => {
  const wrapper = ({ items, columns }) => (
    <div
      className="w-full h-full grid place-items-center"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items?.map((item) => (
        <Component key={item.id || item} item={item} />
      ))}
    </div>
  );

  wrapper.defaultProps = {
    columns: "4",
    items: [],
  };

  wrapper.propTypes = {
    items: PropTypes.array,
    columns: PropTypes.string,
  };
  return wrapper;
};

List.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default List;
