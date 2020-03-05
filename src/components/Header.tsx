// import * as React from "react";
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import * as burgerImg from '../images/burger.svg';



const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openMenu, chgMenu] = useState<boolean>(false);
  const [currLanguage, setCurrLanguage] = useState<string>("РУССКИЙ")
  const [modeTitle, chgModeTitle] = useState<string>("links.dark");


  useEffect(() => {
    // checks for dark theme and ru language
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) chgTheme();
    if (window.navigator.language === "ru") {
      i18n.changeLanguage('ru');
      setCurrLanguage("ENGLISH");
    }
  }, []);

  function chgLanguage(): void {
    if (currLanguage === 'РУССКИЙ') {
      i18n.changeLanguage('ru');
      setCurrLanguage("ENGLISH");
    } else {
      i18n.changeLanguage('en');
      setCurrLanguage("РУССКИЙ");
    }
  }
  function chgTheme(): void {
    if (modeTitle === "links.dark") {
      const doc = document.getElementsByClassName("app")[0] as HTMLElement;
      doc.className = "app_night";
      document.body.setAttribute("style", "background-color:rgb(29, 26, 26)");
      chgModeTitle("links.light");
    } else {
      const doc = document.getElementsByClassName("app_night")[0] as HTMLElement;
      doc.className = "app";
      document.body.setAttribute("style", "background-color:white");
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
        <button onClick={() => chgLanguage()} type="button">{currLanguage}</button>
      </nav>
    </header>
  );
}


export default Header;
