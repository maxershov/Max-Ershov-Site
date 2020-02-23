/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import ProjectContent from "./ProjectContent";
import { useTranslation } from 'react-i18next';
import { objCRM, objThis, objJava } from "./projectData";


const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="projectsPage _shadow">
      <h3>{t("projects.title")}</h3>
      <div className="projects">
        <ProjectContent {...objThis} />
        <ProjectContent {...objJava} />
        <ProjectContent {...objCRM} />
      </div>
      <button title="Scroll up" type="button" onClick={() => window.scrollTo(0, 0)}>&uarr;</button>
    </div>
  );
}

export default ProjectsPage;
