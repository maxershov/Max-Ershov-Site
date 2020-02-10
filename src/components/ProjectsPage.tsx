import * as React from "react";
import ProjectContent from "./ProjectContent";
import { objCRM, objThis } from "./projectData";

const ProjectsPage: React.FC = () => (
  <div className="projectsPage _shadow">
    <h3>MY PROJECTS:</h3>
    <div className="projects">
      <ProjectContent {...objCRM} />
      <ProjectContent {...objThis} />
    </div>
  </div>
);

export default ProjectsPage;
