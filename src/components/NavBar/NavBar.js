import React from "react";
import PropTypes from "prop-types";
import Nav from "../Nav";

const NavBar = (props) => {
  const { src, siteName, items = [] } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href={`${src}`}>
        {siteName}
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Nav htmlId="navItemHtmlId" items={items} />
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  src: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  items: PropTypes.array,
};

export default NavBar;
