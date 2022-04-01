import { header } from "../../info";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3>
        {/*
        TODO: need to get a domain so that I can fill in with proper link
              if not then a tag wont render and will just show title
        */}
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <NavBar />
    </header>
  );
};

export default Header;
