import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { about } from "../../info";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          <span className="about-name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about-role">{role}.</h2>}
      <p className="about-desc">{description && description}</p>

      <div className="about-contact center">
        {resume && (
          <a href={resume} target="_blank" rel="noreferrer">
            <span type="button" className="btn btn-outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link-icon"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link-icon"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}

            {social.email && (
              <a
                href={`mailto:${social.email}`}
                aria-label="email"
                className="link link-icon"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
