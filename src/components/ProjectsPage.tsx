import * as React from "react";
import Project from "./Project";
import { objCRM, objThis } from "./projectData";

const ProjectsPage: React.FC = () => {
  return (
    <div className="projectsPage _shadow">
      <h3>My Projects:</h3>
      <div className="projects">
        <Project {...objCRM} />
        <Project {...objThis} />
      </div>
    </div>
  );
};

export default ProjectsPage;
