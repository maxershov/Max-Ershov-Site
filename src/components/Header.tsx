import React, { useEffect, useState, useContext } from "react";
import * as sprite from "../images/sprite.svg";
import Context from './Context';


interface HeaderProps {
  setLng: React.Dispatch<React.SetStateAction<string>>
}


const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

  const t = useContext(Context);

  const [openMenu, chgMenu] = useState<boolean>(false);
  const [toLanguage, setToLanguage] = useState<string>("РУССКИЙ");
  const [modeTitle, chgModeTitle] = useState<"light" | "dark">("dark");


  function handleClick(event: MouseEvent) {
    // close burger menu after click on anchor
    if (event.target instanceof HTMLAnchorElement) {
      chgMenu(false);
    }
  }


  function chgLanguage() {
    if (toLanguage === "РУССКИЙ") {
      setToLanguage("ENGLISH");
      props.setLng("ru")
    } else {
      setToLanguage("РУССКИЙ");
      props.setLng("en")
    }
  }


  function chgTheme() {
    if (modeTitle === "dark") {
      document.documentElement.setAttribute('data-theme', 'dark');
      chgModeTitle("light");
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      chgModeTitle("dark");
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
      <button type="button" id="burgerBtn" aria-label={t?.links?.menu} onClick={() => chgMenu(!openMenu)}>
        <svg id="burgerImg" width="2em" height="2em">
          <use xlinkHref={`${sprite}#Burger`} />
        </svg>
      </button>
      <nav className={openMenu ? "app__links_open" : "app__links"}>
        <a href="#home">
          {t?.links?.home}
        </a>
        <a href="#projects">
          {t?.links?.projects}
        </a>
        <a href="#contacts">
          {t?.links?.contacts}
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          {t?.links?.login}
        </a>
        <button type="button" onClick={() => chgTheme()}>
          {t?.links ? t.links[modeTitle] : null}
          <label htmlFor="change theme" className="switch">
            <input
              onChange={() => chgTheme()}
              checked={modeTitle === "light"}
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
              onChange={() => chgLanguage()}
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
