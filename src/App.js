import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {/* <nav className="top-nav">
        <a href="#home">home</a>
        <a href="#about">about</a>
      </nav> */}

      <div className="container">
        <img
          src="programmer.png"
          alt="programmer"
          className="programmer-icon"
        />
        <h1 className="title">
          Hi, I'm <span>Tejas</span> Pande.
        </h1>
        <p className="subtitle">Welcome to my Webpage!</p>

        <div className="social-links">
          <a
            href="https://www.github.com/insanex11"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ fontSize: "25px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/tejas-pande11/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin style={{ fontSize: "25px" }} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tejas.pande611@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope style={{ fontSize: "25px" }} />
          </a>
        </div>

        <div className="buttons">
          <a
            href="https://drive.google.com/file/d/1G2bON6k8pm7SHrepjASTFRndVB4qZqgB/view?usp=drive_link"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <footer className="footer">
        <span>Built with ❤️ by P. Tejas</span>
        <br />
        <br />
        <span>© 2025 Tejas Pande. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
