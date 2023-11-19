import "./styles.css";
import { v4 } from "uuid";
import defaultImg from "./default.png";
export default function ProjectCard({
  projectName,
  technologies,
  githubLink,
  description,
  imgSrc,
}) {
  return (
    <div className="project-card test">
      <img src={imgSrc} onError={getDefaultImage()} alt="" />
      <h1>{projectName}</h1>

      {technologies?.map((name) => (
        <Tags name={name} key={v4()} />
      ))}
      <p>{description}</p>
      <a href={githubLink}>GitHub</a>
    </div>
  );
}

function getDefaultImage() {
  return (event) => {
    event.onerror = null;
    event.target.src = defaultImg;
  };
}

function Tags({ name }) {
  return <div className={`${name} pc-tag`}>{name}</div>;
}
