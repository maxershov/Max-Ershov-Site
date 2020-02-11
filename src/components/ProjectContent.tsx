import * as React from "react";
import { herokuImg, githubImg } from "./iconsList";

export interface ProjectProps {
  name?: string;
  icons?: string[];
  linkHub?: string;
  linkLive?: string;
  idImg?: string;
  src?: string;
  id?: string;
  text?: string[];
  heroku?: string;
}


const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  const { name, icons, linkHub, linkLive, idImg, src, id, text, heroku } = props;
  return (
    <div id={id} className="projects__content">
      <p>{name}</p>
      <a href={linkHub}>
        <img id={idImg} alt={idImg} src={src} />
      </a>
      <div className="icons">
        {icons.map(icon => <img className="__logo" alt="icon" src={icon} />)}
      </div>
      <p>Stack:</p>
      <ul>
        {text.map(line => <li key={line}>{line}</li>)}
      </ul>
      <div className="anchors">
        <a href={linkLive}>
          <img style={{ height: "1em" }} alt="herokuLogo" src={herokuImg} />
          Live Web
        </a>
        <a href={linkHub}>
          <img style={{ height: "1em" }} alt="githubLogo" src={githubImg} />
          GitHub repo
        </a>
      </div>
      <p>{heroku}</p>
    </div>
  );
};


export default Project;
