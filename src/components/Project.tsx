import * as React from "react";
import * as sprite from "../images/sprite.svg";


export interface IProject {
  id: string;
  icons: string;
  idImg: string;
  linkHub: string;
  linkLive: string;
  name: string;
  text: string;
  imgjpg: ImgjpgOrImgwebp;
  imgwebp: ImgjpgOrImgwebp;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ImgjpgOrImgwebp {
  sourceUrl: string;
  altText: string;
}

export const Project: React.FC<IProject> = (props: IProject) => {
  const { name, icons, linkHub, linkLive, idImg, imgjpg, imgwebp, id, text, setShowModal } = props;
  return (
    <article id={id} className="projects__content">
      <div className="project-images">
        <a onClick={() => setShowModal(true)} onAuxClick={() => setShowModal(true)} href={linkLive || linkHub}>
          <picture>
            <source srcSet={imgwebp.sourceUrl} type="image/webp" />
            <source srcSet={imgjpg.sourceUrl} type="image/jpeg" />
            <img width="250px" loading="lazy" id={idImg} alt={imgjpg.altText} src={imgjpg.sourceUrl} />
          </picture>
        </a>
        <div className="icons">
          {icons.split(",").map((icon) =>
            <svg key={icon} width="2em" height="2em">
              <title>{icon}</title>
              <use xlinkHref={`${sprite}#${icon.replace(/\s/g, '')}`} />
            </svg>)}
        </div>
      </div>
      <div className="project-info">
        <p className="project-name">{name}</p>
        <ul>
          {text.split("\n").map(line => <li key={line}>{line}</li>)}
        </ul>
        <div className="project__links">
          {linkLive ? (
            <a onClick={() => setShowModal(true)} onAuxClick={() => setShowModal(true)} href={linkLive}>
              <svg id="play-icon" width="1.7em" height="1.7em">
                <use xlinkHref={`${sprite}#Play`} />
              </svg>
              Live
            </a>
          ) : undefined}
          {linkHub ? (
            <a href={linkHub}>
              <svg id="githubImg" width="1.8em" height="1.8em">
                <use xlinkHref={`${sprite}#Github`} />
              </svg>
              GitHub
            </a>
          ) : undefined}
        </div>
      </div>
    </article>
  );
};
