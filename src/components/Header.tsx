import * as React from "react";
import { Link, Redirect } from "react-router-dom";
import * as burgerImg from '../images/burger.svg';



const Header: React.FC = () => {
  const [openMenu, chgMenu] = React.useState<boolean>(false);
  return (
    <header>
      <button id="burgerBtn" type="button" onClick={() => chgMenu(!openMenu)}><img alt="burgerImg" src={burgerImg} /></button>
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
