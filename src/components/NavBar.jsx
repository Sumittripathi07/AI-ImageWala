import logo from "../images/logo.svg";
import "../App.css";

const NavBar = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" width={100} />
      <p>AI ImageWala - Image Generator</p>
      <a
        className="App-link"
        href="https://www.linkedin.com/in/sumittripathi07/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @Sumittripathi07
      </a>
    </header>
  );
};

export default NavBar;
