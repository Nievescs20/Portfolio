import { projects, skills } from "../../info";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="center nav">
      <ul className="nav-list">
        {projects.length ? (
          <li className="nav-list-item">
            <a href="#projects" className="link link-nav">
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav-list-item">
            <a href="#skills" className="link link-nav">
              Skills
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default NavBar;
