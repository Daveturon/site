import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
    <h1>David Turon</h1>
    <h2>University of Massachusetts Amherst</h2>
    <nav>
      <ul>
        <NavLink to="/" className="link">About</NavLink>
        <NavLink to="/Research" className="link">Research</NavLink>
        <NavLink to="/Teaching" className="link">Teaching</NavLink>
        <a  
          href={require("../resources/turon_cv.pdf")} 
          className="link" 
          target="_blank" 
          rel="noreferrer"
        >
          CV
        </a>
      </ul> 
    </nav>
    </header>
  );
}

export default Header;
