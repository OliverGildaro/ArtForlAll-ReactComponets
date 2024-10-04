import React from "react";
import PropTypes from "prop-types";

const GridRow = ({
  rowClassName = "form-row",
  colClassNames = [],
  children,
}) => {
  return (
    <div className={rowClassName}>
      {React.Children.map(children, (child, index) => (
        <div className={colClassNames[index] || "col"}>{child}</div>
      ))}
    </div>
  );
};

GridRow.propTypes = {
  /** Custom class for the row */
  rowClassName: PropTypes.string,

  /** Array of classes for each column */
  colClassNames: PropTypes.arrayOf(PropTypes.string),

  /** Child components, typically form inputs */
  children: PropTypes.node.isRequired,
};

export default GridRow;
