import React from "react";
import NavItem from "ps-react/NavItem";

function NavItemActiveExample() {
  return (
    <NavItem
      htmlId="navItemHtmlId"
      label="Internationalization"
      src="/home"
      disabled={false}
      active={true}
    />
  );
}

export default NavItemActiveExample;
