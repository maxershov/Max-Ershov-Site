import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import MainPage from "./MainPage";
import ContactsPage from "./ContactsPage";
import ProjectsPage from "./ProjectsPage";
import Header from "./Header";
import * as sprite from "../images/sprite.svg";

require("./App.scss");


const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Check for language
    if (window.navigator.language === "ru" || window.navigator.language === "ru-RU") {
      i18n.changeLanguage("ru");
      document.getElementsByTagName('html')[0].setAttribute('lang', "ru");
    }
  }, [i18n])

  return (
    <main id="home" className="app">
      <a id="toTop" title="Back to top" href="#home">
        <svg id="topArrowImg" width="1em" height="1em">
          <use xlinkHref={`${sprite}#TopArrow`} />
        </svg>
      </a>
      <Header />
      <MainPage />
      <ProjectsPage />
      <ContactsPage />
    </main>
  )
};

export default App;
