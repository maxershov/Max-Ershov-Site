import * as React from "react";
import {herokuImg, githubImg} from "./iconsList";

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
    <>
      <div id={id} className="projects__content">
        <h3>{name}</h3>
        <a href={linkHub}>
          <img id={idImg} alt={idImg} src={src} />
        </a>
        <div className="icons">
          {icons.map(function(icon, i) {
          return <img className="__logo" src={icon} />
        })}
        </div>
        <h3>Stack:</h3>
        <ul>
          {text.map(function(line, i) {
            return <li key={i}>{line}</li>;
          })}
        </ul>
        <div className="anchors">
          <a href={linkLive}>
            <img style={{ height: "1em" }} alt="herokuLogo" src={herokuImg} />
            Live Web version
          </a>
          <a href={linkHub}>
            <img style={{ height: "1em" }} alt="githubLogo" src={githubImg} />
            GitHub repo
          </a>
        </div>
        <p>
          <img alt="herokuImg" src={herokuImg} />
          {heroku}
        </p>
      </div>
    </>
  );
};


export default Project;
