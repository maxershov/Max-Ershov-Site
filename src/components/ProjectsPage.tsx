import * as React from "react";
import Project from "./Project";
import { objCRM, objThis } from "./ProjectData";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <h2>My Projects:</h2>
      <Project {...objCRM} />
      <Project {...objThis} />
    </>
  );
};

export default ProjectsPage;
