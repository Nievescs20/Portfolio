import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => {
  console.log("project", project);

  return (
    <div className="project">
      <h3>{project.name}</h3>
      <img
        className="pic"
        src={process.env.PUBLIC_URL + project.img}
        alt="img"
      />

      <p className="project-description">{project.description}</p>
      {project.stack && (
        <ul className="project-stack">
          {project.stack.map((item) => (
            <li key={uniqid()} className="project-stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}
      <div>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label="source code"
            className="link link-icon"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label="live preview"
            className="link link-icon"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
