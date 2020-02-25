/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import ProjectContent from "./ProjectContent";
import { useTranslation } from "react-i18next";
import { objCRM, objThis, objJava, ruCRM, ruThis, ruJava, objCounter, ruCounter } from "./projectData";
import i18next from "i18next";

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const currLanguage = i18next.language;
  const enObj = [objThis, objCounter, objCRM, objJava];
  const ruObj = [ruThis, ruCounter, ruCRM, ruJava];
  return (
    <div className="projectsPage _shadow">
      <h3>{t("projects.title")}</h3>
      <div className="projects">
        {currLanguage === "ru"
          ? ruObj.map(obj => <ProjectContent {...obj} />)
          : enObj.map(obj => <ProjectContent {...obj} />)}
      </div>
      <button
        title="Scroll up"
        type="button"
        onClick={() => window.scrollTo(0, 0)}
      >
        &uarr;
      </button>
    </div>
  );
};

export default ProjectsPage;
