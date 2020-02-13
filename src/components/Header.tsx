import * as React from "react";
import { Link, Redirect } from "react-router-dom";
import * as burgerImg from '../images/burger.svg';



const Header: React.FC = () => {
  const [openMenu, chgMenu] = React.useState<boolean>(false);
  const [isDark, chgDark] = React.useState<boolean>(false);
  function chgTheme(): void {
    if (!isDark) {
      const doc = document.getElementsByClassName("app")[0] as HTMLElement;
      doc.className = "app_night";
      const body = document.body as HTMLElement;
      body.setAttribute("style", "background-color:rgb(29, 26, 26)");
      chgDark(!isDark);
    } else {
      const doc = document.getElementsByClassName("app_night")[0] as HTMLElement;
      doc.className = "app";
      const body = document.body as HTMLElement;
      body.setAttribute("style", "background-color:white");
      chgDark(!isDark);
    }
  }
  return (
    <header>
      <button id="burgerBtn" type="button" onClick={() => chgMenu(!openMenu)}><img alt="burgerImg" src={burgerImg} /></button>
      <nav className={openMenu ? "app__links_open" : "app__links"}>
        <Redirect exact from="/" to="/home" />
        <Link to="/home">HOME</Link>
        <Link to="/dev">PROJECTS</Link>
        <Link to="/contacts">CONTACTS</Link>
        <a onClick={() => chgTheme()}>DARK THEME</a>
      </nav>
    </header>
  );
}

export default Header;
