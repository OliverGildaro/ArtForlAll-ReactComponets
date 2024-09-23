import React from "react";
import PropTypes from "prop-types";
import NavItem from "../NavItem";

const Nav = ({ htmlId, items = [], ...props }) => {
  return (
    <ul className="nav justify-content-center">
      {items.map((item) => (
        <NavItem
          key={item.htmlId}
          htmlId={item.htmlId}
          label={item.label}
          src={item.src}
          disabled={item.disabled}
          active={item.active}
          {...props}
        />
      ))}
    </ul>
  );
};

Nav.propTypes = {
  /** id of the nav */
  htmlId: PropTypes.string.isRequired,

  /** Array of nav items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      htmlId: PropTypes.string.isRequired, // ID of the NavItem
      label: PropTypes.string.isRequired, // Label of the NavItem
      src: PropTypes.string, // Source URL for the NavItem
      disabled: PropTypes.bool, // Disabled state of the NavItem
      active: PropTypes.bool, // Active state of the NavItem
    })
  ),
};

export default Nav;
