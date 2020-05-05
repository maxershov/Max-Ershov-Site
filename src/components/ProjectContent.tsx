import * as React from "react";
import { useTranslation } from 'react-i18next';

export interface ProjectProps {
  name: string;
  icons: string[];
  linkHub: string;
  linkLive?: string;
  idImg?: string;
  src?: string[];
  id?: string;
  text: string[];
  heroku?: string;
}


const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  const { t } = useTranslation();
  const { name, icons, linkHub, linkLive, idImg, src, id, text, heroku } = props;
  return (
    <article id={id} className="projects__content">
      <p className="project-name">{name}</p>
      <div className="project-images">
        <a href={linkLive || linkHub}>
          <picture>
            <source srcSet={src[1]} type="image/webp" />
            <source srcSet={src[0]} type="image/jpeg" />
            <img width="250px" loading="lazy" id={idImg} alt={idImg} src={src[0]} />
          </picture>
        </a>
        <div className="icons">
          {icons.map((icon) => <svg key={icon} width="2em" height="2em">
            <title>{icon}</title>
            <use xlinkHref={`sprite.svg#${icon}`} />
          </svg>)}
        </div>
      </div>
      <div className="project-info">
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
        <p className="last-line">{heroku}</p>
      </div>
    </article>
  );
};


export default Project;
