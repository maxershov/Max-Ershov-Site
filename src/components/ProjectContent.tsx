import * as React from "react";
import { useTranslation } from 'react-i18next';
import { herokuImg, githubImg } from "./iconsList";

export interface ProjectProps {
  name: string;
  icons: string[][];
  linkHub: string;
  linkLive?: string;
  idImg?: string;
  src?: string;
  id?: string;
  text: string[];
  heroku?: string;
}


const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  const { t } = useTranslation();
  const { name, icons, linkHub, linkLive, idImg, src, id, text, heroku } = props;
  return (
    <article id={id} className="projects__content">
      <p>{name}</p>
      <a href={linkLive || linkHub}>
        <img id={idImg} alt={idImg} src={src} />
      </a>
      <div className="icons">
        {icons.map((icon, i) => <img className="__logo" title={icon[1]} key={icon[1]} alt="icon" src={icon[0]} />)}
      </div>
      <p>{t("projects.stack")}</p>
      <ul>
        {text.map(line => <li key={line}>{line}</li>)}
      </ul>
      <div className="anchors">
        {linkLive ? (
          <a href={linkLive}>
            <img id="darkImg" style={{ height: "1em" }} alt="herokuLogo" src={herokuImg} />
            Live
          </a>
        ) : undefined}
        <a href={linkHub}>
          <img id="darkImg" style={{ height: "1em" }} alt="githubLogo" src={githubImg} />
          GitHub
        </a>
      </div>
      <p>{heroku}</p>
    </article>
  );
};


export default Project;
