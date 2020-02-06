import * as React from "react";


export interface ProjectProps {
  name?: string;
  linkHub?: string;
  linkLive?: string;
  idImg?: string;
  src?: string;
  id?: string;
  text?: string[];
  heroku?: string;
}


const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  const { name, linkHub, linkLive, idImg, src, id, text, heroku } = props;
  return (
    <>
      <div id={id} className="object-container">
        <h3>{name}</h3>
        <a href={linkHub}>
          <img id={idImg} alt={idImg} src={src} />
        </a>
        <ul>
          {text.map(line => {
            return <li>{line}</li>;
          })}
        </ul>
        <div className="anchor-container">
          <a href={linkLive}>Live Web version</a>
          <a href={linkHub}>GitHub repo</a>
        </div>
        <p>{heroku}</p>
      </div>
    </>
  );
};


export default Project;
