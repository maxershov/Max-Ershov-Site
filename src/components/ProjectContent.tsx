import * as React from "react";

interface ProjectProps {
  name: string;
  icons: string[];
  linkHub: string;
  linkLive: string | undefined;
  idImg: string;
  src: string[];
  id: string;
  text: string[];
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}



const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  const { name, icons, linkHub, linkLive, idImg, src, id, text, setShowModal } = props;

  return (
    <article id={id} className="projects__content">
      <div className="project-images">
        <a onClick={() => setShowModal(true)} onAuxClick={() => setShowModal(true)} href={linkLive || linkHub}>
          <picture>
            <source srcSet={src[1]} type="image/webp" />
            <source srcSet={src[0]} type="image/jpeg" />
            <img width="250px" loading="lazy" id={idImg} alt={idImg} src={src[0]} />
          </picture>
        </a>
        <div className="icons">
          {icons.map((icon) =>
            <svg key={icon} width="2em" height="2em">
              <title>{icon}</title>
              <use xlinkHref={`sprite.svg#${icon}`} />
            </svg>)}
        </div>
      </div>
      <div className="project-info">
        <p className="project-name">{name}</p>
        <ul>
          {text.map(line => <li key={line}>{line}</li>)}
        </ul>
        <div className="project__links">
          {linkLive ? (
            <a onClick={() => setShowModal(true)} onAuxClick={() => setShowModal(true)} href={linkLive}>
              <svg id="play-icon" width="1.7em" height="1.7em">
                <use xlinkHref="sprite.svg#Play" />
              </svg>
              Live
            </a>
          ) : undefined}
          {linkHub ? (
            <a href={linkHub}>
              <svg id="githubImg" width="1.8em" height="1.8em">
                <use xlinkHref="sprite.svg#Github" />
              </svg>
              GitHub
            </a>
          ) : undefined}
        </div>
      </div>
    </article>
  );
};


export default Project;
