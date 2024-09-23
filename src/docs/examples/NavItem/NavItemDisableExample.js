import React from "react";
import NavItem from "ps-react/NavItem";

function NavItemDisableExample() {
  return (
    <NavItem
      htmlId="navItemHtmlId"
      label="Internationalization"
      src="/home"
      disabled={true}
      active={false}
    />
  );
}

export default NavItemDisableExample;
