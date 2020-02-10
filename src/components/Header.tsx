import * as React from "react";
import { Link, Redirect } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="app__links">
      <Redirect exact from="/" to="/home" />
      <Link to="/home">Home</Link>
      <Link to="/dev">Projects</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  </header>
  );

export default Header;
