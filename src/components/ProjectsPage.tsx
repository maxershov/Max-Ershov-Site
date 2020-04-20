/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import ProjectContent from "./ProjectContent";
import { useTranslation } from "react-i18next";
import { objCRM, objThis, ruCRM, ruThis, objCounter, ruCounter, objCovid, ruCovid } from "./projectData";
import i18next from "i18next";


const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const currLanguage = i18next.language;
  const enObj = [objThis, objCRM, objCounter, objCovid];
  const ruObj = [ruThis, ruCRM, ruCounter, ruCovid];
  return (
    <section id="projects" className="projectsPage _shadow">
      <h2>{t("projects.title")}</h2>
      <div className="projects">
        {currLanguage === "ru"
          ? ruObj.map(obj => <ProjectContent {...obj} />)
          : enObj.map(obj => <ProjectContent {...obj} />)}
      </div>
    </section>
  );
};

export default ProjectsPage;
