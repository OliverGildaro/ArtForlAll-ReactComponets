import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = ({
  htmlId,
  label,
  src,
  disabled = false,
  active = false,
  ...props
}) => {
  // const classNames = `nav-link ${active ? "active" : ""} ${
  //   disabled ? "disabled" : ""
  // }`.trim();

  return (
    <li className="nav-item" id={htmlId}>
      <NavLink
        to={src}
        className={({ isActive }) => {
          return isActive ? "nav-link active" : "nav-link";
        }}
        {...props}
      >
        <div>{label}</div>
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  /** id of the nav */
  htmlId: PropTypes.string.isRequired,

  /** Label of the nav */
  label: PropTypes.string.isRequired,

  /** Lik reference*/
  src: PropTypes.string.isRequired,

  /** Disable nav element */
  active: PropTypes.bool,

  /** Disable nav element */
  disabled: PropTypes.bool,
};

export default NavItem;
