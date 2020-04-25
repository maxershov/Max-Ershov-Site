import * as React from "react";
import { useTranslation } from 'react-i18next';

export interface ProjectProps {
  name: string;
  icons: string[];
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
        <img loading="lazy" id={idImg} alt={idImg} src={src} />
      </a>
      <div className="icons">
        {icons.map((icon) => <svg className="__logo" key={icon} width="1.5em" height="1.5em">
          <title>{icon}</title>
          <use xlinkHref={`sprite.svg#${icon}`} />
        </svg>)}
      </div>
      <p>{t("projects.stack")}</p>
      <ul>
        {text.map(line => <li key={line}>{line}</li>)}
      </ul>
      <div className="anchors">
        {linkLive ? (
          <a href={linkLive}>
            <svg id="herokuImg" width="1em" height="1em">
              <use xlinkHref="sprite.svg#Heroku" />
            </svg>
            Live
          </a>
        ) : undefined}
        <a href={linkHub}>
          <svg id="githubImg" width="1em" height="1em">
            <use xlinkHref="sprite.svg#Github" />
          </svg>
          GitHub
        </a>
      </div>
      <p>{heroku}</p>
    </article>
  );
};


export default Project;
