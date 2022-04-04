import { useState } from "react";
import { projects, skills } from "../../info";
import "./Navbar.css";

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul className="nav-list">
        {projects.length ? (
          <li className="nav-list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link-nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav-list-item">
            <a href="#skills" onClick={toggleNavList} className="link link-nav">
              Skills
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
