import React from "react";
import Nav from "ps-react/Nav";

function NavExample() {
  return <Nav htmlId="navItemHtmlId" items={navItems} />;
}

export default NavExample;

const navItems = [
  {
    htmlId: "home",
    label: "Home",
    src: "/home",
    disabled: false,
    active: true,
  },
  {
    htmlId: "about",
    label: "About",
    src: "/about",
    disabled: false,
    active: false,
  },
  {
    htmlId: "services",
    label: "Services",
    src: "/services",
    disabled: false,
    active: false,
  },
  {
    htmlId: "contact",
    label: "Contact",
    src: "/contact",
    disabled: true, // This item is disabled
    active: false,
  },
];
