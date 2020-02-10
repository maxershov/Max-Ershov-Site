import * as React from "react";
import { Link, Redirect } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="app__links">
      <Redirect exact from="/" to="/home" />
      <Link to="/home">HOME</Link>
      <Link to="/dev">PROJECTS</Link>
      <Link to="/contacts">CONTACTS</Link>
    </nav>
  </header>
  );

export default Header;
