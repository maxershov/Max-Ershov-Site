/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as sprite from "../images/sprite.svg";

const Header: React.FC = () => {

  const { t, i18n } = useTranslation();
  const [openMenu, chgMenu] = useState<boolean>(false);
  const [toLanguage, setToLanguage] = useState<string>("РУССКИЙ");
  const [modeTitle, chgModeTitle] = useState<string>("links.dark");


  function handleClick(event: MouseEvent) {
    // close burger menu after click on anchor
    if (event.target instanceof HTMLAnchorElement) {
      chgMenu(false);
    }
  }


  function chgLanguage(): void {
    if (toLanguage === "РУССКИЙ") {
      setToLanguage("ENGLISH");
      i18n.changeLanguage("ru");
      document.title = "Макс Ершов";
      document.getElementsByTagName('html')[0].setAttribute('lang', "ru");
    } else {
      setToLanguage("РУССКИЙ");
      i18n.changeLanguage("en");
      document.getElementsByTagName('html')[0].setAttribute('lang', "en");
      document.title = "Max Ershov"
    }
  }


  function chgTheme(): void {
    if (modeTitle === "links.dark") {
      document.documentElement.setAttribute('data-theme', 'dark');
      chgModeTitle("links.light");
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      chgModeTitle("links.dark");
    }
  }


  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);


  useEffect(() => {
    // checks for dark theme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) chgTheme();
  }, []);

  return (
    <header>
      <button type="button" id="burgerBtn" aria-label={t("links.menu")} onClick={() => chgMenu(!openMenu)}>
        <svg id="burgerImg" width="2em" height="2em">
          <use xlinkHref={`${sprite}#Burger`} />
        </svg>
      </button>
      <nav className={openMenu ? "app__links_open" : "app__links"}>
        <a href="#home">
          {t("links.home")}
        </a>
        <a href="#projects">
          {t("links.projects")}
        </a>
        <a href="#contacts">
          {t("links.contacts")}
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          {t("links.login")}
        </a>
        <button type="button" onClick={() => chgTheme()}>
          {t(modeTitle)}
          <label htmlFor="change theme" className="switch">
            <input
              onClick={() => chgTheme()}
              checked={modeTitle === "links.light"}
              type="checkbox"
              id="checkbox"
              name="change theme"
            />
            <div className="slider round" />
          </label>
        </button>
        <button onClick={() => chgLanguage()} type="button">
          {toLanguage}
          <label htmlFor="change language" className="switch">
            <input
              onClick={() => chgLanguage()}
              checked={toLanguage !== "РУССКИЙ"}
              type="checkbox"
              id="checkbox"
              name="change language"
            />
            <div className="slider round" />
          </label>
        </button>
      </nav>
    </header>
  );
};

export default Header;
