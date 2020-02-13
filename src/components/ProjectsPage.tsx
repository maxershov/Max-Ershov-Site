/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import ProjectContent from "./ProjectContent";
import { objCRM, objThis, objJava } from "./projectData";


const ProjectsPage: React.FC = () => (
  <div className="projectsPage _shadow">
    <h3>MY PROJECTS:</h3>
    <div className="projects">
      <ProjectContent {...objThis} />
      <ProjectContent {...objJava} />
      <ProjectContent {...objCRM} />
    </div>
    <button type="button" onClick={() => window.scrollTo(0, 0)}>&uarr;</button>
  </div>
  );


export default ProjectsPage;
