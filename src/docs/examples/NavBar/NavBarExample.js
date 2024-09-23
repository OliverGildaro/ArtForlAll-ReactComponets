import React from "react";
import NavBar from "ps-react/NavBar";

/** All features enabled */
function NavBarExample() {
  return <NavBar src="/home" siteName="name" items={navItems} />;
  // return <div>sdsd</div>;
}

export default NavBarExample;

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
