/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import ProjectContent from "./ProjectContent";
import { useTranslation } from "react-i18next";
import { objCRM, objThis, ruCRM, ruThis, objCounter, ruCounter, objCovid, ruCovid } from "./projectData";
import i18next from "i18next";


const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const currLanguage = i18next.language;
  const enObj = [objThis, objCounter, objCRM, objCovid];
  const ruObj = [ruThis, ruCounter, ruCRM, ruCovid];
  return (
    <div id="projects" className="projectsPage _shadow">
      <h3>{t("projects.title")}</h3>
      <div className="projects">
        {currLanguage === "ru"
          ? ruObj.map(obj => <ProjectContent {...obj} />)
          : enObj.map(obj => <ProjectContent {...obj} />)}
      </div>
    </div>
  );
};

export default ProjectsPage;
