import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openMenu, chgMenu] = useState<boolean>(false);
  const [currLanguage, setCurrLanguage] = useState<string>("РУССКИЙ");
  const [modeTitle, chgModeTitle] = useState<string>("links.dark");


  function handleClick(event: MouseEvent) {
    // close burger menu after click on anchor
    if (event.target instanceof HTMLAnchorElement) {
      chgMenu(false);
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


  function chgLanguage(): void {
    if (currLanguage === "РУССКИЙ") {
      setCurrLanguage("ENGLISH");
      i18n.changeLanguage("ru");
      document.title = "Макс Ершов"
    } else {
      setCurrLanguage("РУССКИЙ");
      i18n.changeLanguage("en");
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



  return (
    <header>
      <button type="button" id="burgerBtn" onClick={() => chgMenu(!openMenu)}><svg id="burgerImg" width="3em" height="3em">
        <use xlinkHref="sprite.svg#Burger" />
      </svg></button>
      <nav className={openMenu ? "app__links_open" : "app__links"}>
        <a title="To home" href="#home">
          {t("links.home")}
        </a>
        <a title="To projects" href="#projects">
          {t("links.projects")}
        </a>
        <a title="To contacts" href="#contacts">
          {t("links.contacts")}
        </a>
        <button title="Change theme" type="button" onClick={() => chgTheme()}>
          {t(modeTitle)}
          <label className="switch">
            <input
              onClick={() => chgTheme()}
              checked={modeTitle === "links.light" ? true : false}
              type="checkbox"
              id="checkbox"
            />
            <div className="slider round"></div>
          </label>
        </button>
        <button onClick={() => chgLanguage()} type="button">
          {currLanguage}
          <label className="switch">
            <input
              onClick={() => chgLanguage()}
              checked={currLanguage === "РУССКИЙ" ? false : true}
              type="checkbox"
              id="checkbox"
            />
            <div className="slider round"></div>
          </label>
        </button>
      </nav>
    </header>
  );
};

export default Header;
