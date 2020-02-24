import * as React from "react";
import { Link, Redirect } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import * as burgerImg from '../images/burger.svg';



const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openMenu, chgMenu] = React.useState<boolean>(false);
  const [isDark, chgDark] = React.useState<boolean>(false);
  // const [modeTitle, chgModeTitle] = React.useState<string>("DARK THEME");
  const [modeTitle, chgModeTitle] = React.useState<string>("links.dark");
  function chgTheme(): void {
    if (!isDark) {
      const doc = document.getElementsByClassName("app")[0] as HTMLElement;
      doc.className = "app_night";
      const body = document.body as HTMLElement;
      body.setAttribute("style", "background-color:rgb(29, 26, 26)");
      chgDark(!isDark);
      chgModeTitle("links.light");
    } else {
      const doc = document.getElementsByClassName("app_night")[0] as HTMLElement;
      doc.className = "app";
      const body = document.body as HTMLElement;
      body.setAttribute("style", "background-color:white");
      chgDark(!isDark);
      chgModeTitle("links.dark");
    }
  }
  return (
    <header>
      <button id="burgerBtn" type="button" onClick={() => chgMenu(!openMenu)}><img alt="burgerImg" src={burgerImg} /></button>
      <nav className={openMenu ? "app__links_open" : "app__links"}>
        <Redirect exact from="/" to="/home" />
        <Link to="/home">{t("links.home")}</Link>
        <Link to="/projects">{t("links.projects")}</Link>
        <Link to="/contacts">{t("links.contacts")}</Link>
        <button title="Change theme" type="button" onClick={() => chgTheme()}>{t(modeTitle)}</button>
        <button onClick={() => i18n.changeLanguage('en')} type="button">EN</button>
        <button onClick={() => i18n.changeLanguage('ru')} type="button">РУ</button>
      </nav>
    </header>
  );
}


export default Header;
