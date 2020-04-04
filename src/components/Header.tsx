import React, { useEffect, useState } from "react";
import { useTranslation} from "react-i18next";
import * as burgerImg from "../images/burger.svg";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openMenu, chgMenu] = useState<boolean>(false);
  const [currLanguage, setCurrLanguage] = useState<string>("РУССКИЙ");
  const [modeTitle, chgModeTitle] = useState<string>("links.dark");

  useEffect(() => {
    // checks for dark theme and ru language
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) chgTheme();
  }, []);

  function chgLanguage(): void {
    if (currLanguage === "РУССКИЙ") {
      setCurrLanguage("ENGLISH");
      i18n.changeLanguage("ru");
    } else {
      setCurrLanguage("РУССКИЙ");
      i18n.changeLanguage("en");
    }
  }
  function chgTheme(): void {
    if (modeTitle === "links.dark") {
      const doc = document.getElementsByClassName("app")[0] as HTMLElement;
      doc.className = "app_night";
      document.body.setAttribute("style", "background-color:rgb(29, 26, 26)");
      chgModeTitle("links.light");
    } else {
      const doc = document.getElementsByClassName(
        "app_night"
      )[0] as HTMLElement;
      doc.className = "app";
      document.body.setAttribute("style", "background-color:white");
      chgModeTitle("links.dark");
    }
  }
  return (
    <header>
      <button id="burgerBtn" type="button" onClick={() => chgMenu(!openMenu)}>
        <img alt="burgerImg" src={burgerImg} />
      </button>
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
