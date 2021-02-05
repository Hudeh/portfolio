import React from "react";
import { Link } from "react-scroll";
const header = () => {
  return (
    <div className="header">
    <div className="header-inner">
      <p>Henry Udezuligbo</p>
      <div className="link-right">
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
          About
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Connect
        </Link>
      </div>
      </div>
    </div>
  );
};

export default header;
