import * as React from "react";
import { Link, Redirect } from "react-router-dom";
import * as burgerImg from '../images/burger.svg';



const Header = () => {
  const [openMenu, chgMenu] = React.useState<boolean>(false);
  
  function open() {
    chgMenu(!openMenu);
  }
  return (
    <header>
      <button id="burgerBtn" type="button" onClick={() => open()}><img src={burgerImg} /></button>
      <nav className={openMenu ? "app__links_open" : "app__links"}>
        <Redirect exact from="/" to="/home" />
        <Link to="/home">HOME</Link>
        <Link to="/dev">PROJECTS</Link>
        <Link to="/contacts">CONTACTS</Link>
      </nav>
    </header>
  );
}

export default Header;
