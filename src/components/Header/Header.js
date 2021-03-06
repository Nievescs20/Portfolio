import { header } from "../../info";
import Navbar from "../Navbar/Navbar.js";
import "./Header.css";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {/* {title}*/}
            <img
              src={process.env.PUBLIC_URL + "/images/favicon.png"}
              alt="img"
            />
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
