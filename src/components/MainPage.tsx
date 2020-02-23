import * as React from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import ProjectsPage from "./ProjectsPage";
import ContactsPage from "./ContactsPage";

// <h3>I&apos;M MAX. I&apos;M A FRONTEND DEVELOPER</h3>

const MainPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mainPage">
      <div className="mainPage__text _shadow">
        <h3>{t("title.a")}</h3>
        <h3>{t("title.b")}</h3>
        <p>{t("title.c")}</p>
        <Trans i18nKey="textLinks"><Link to="/projects">projects</Link><Link to="/contacts"></Link></Trans>
        <p>{t("title.d")}</p>
      </div>
      <ProjectsPage />
      <ContactsPage />
    </div>
  );
}

export default MainPage;