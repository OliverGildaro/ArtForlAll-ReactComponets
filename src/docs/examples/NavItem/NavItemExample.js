import React from "react";
import NavItem from "ps-react/NavItem";

function NavItemExample() {
  return (
    <NavItem
      htmlId="navItemHtmlId"
      label="Internationalization"
      src="/home"
      disabled={false}
      active={false}
    />
  );
}

export default NavItemExample;
