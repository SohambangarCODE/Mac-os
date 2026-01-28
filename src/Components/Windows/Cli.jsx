import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setwindowState }) => {
  const commands = {
    details: {
      fn: () => `
Available Commands:
------------------
details     -> Show all commands
about       -> About me
skills      -> My technical skills
projects    -> My projects
contact     -> Contact information
github      -> GitHub profile
linkedin    -> LinkedIn profile
clear       -> Clear terminal
`,
    },

    about: {
      fn: () => (
        <div>
          <span style={{ color: "#00ff00" }}>Hi 👋 I'm Soham Bangar</span>
          <br />
          <span style={{ color: "#00ffff" }}>
            Full-Stack Developer | Problem Solver
          </span>
          <br />
          <br />
          <span>
            I love building interactive web applications and turning ideas into
            real-world products.
          </span>
        </div>
      ),
    },

    skills: {
      fn: () => (
        <div>
          <span style={{ color: "#00ff00" }}>Frontend</span>
          <br />- HTML, CSS, Scss, JavaScript
          <br />- React, Tailwind CSS
          <br />
          <br />
          <span style={{ color: "#00ff00" }}>Backend</span>
          <br />- Node.js, Express
          <br />- MongoDB, SQL
          <br />
          <br />
          <span style={{ color: "#00ff00" }}>Tools</span>
          <br />- Git & GitHub
          <br />- Docker (Basics)
          <br />- AWS (Learning)
        </div>
      ),
    },

    projects: {
      fn: () => (
        <div>
          1) Movie Finder App
          <br />
          2) Smart Traffic Signal System
          <br />
          3) Portfolio Website
          <br />
          4) Document Scanner App
          <br />
          <br />
          More coming soon 🚀
        </div>
      ),
    },

    contact: {
      fn: () => (
        <div>
          Email: sohambangar189@gmail.com
          <br />
          Location: Maharashtra, India
        </div>
      ),
    },

    github: {
      fn: () => (
        <a
          href="https://github.com/SohambangarCODE"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#58a6ff" }}
        >
          https://github.com/SohambangarCODE
        </a>
      ),
    },

    linkedin: {
      fn: () => (
        <a
          href="https://www.linkedin.com/in/soham-bangar-b8507834a/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0a66c2" }}
        >
          https://linkedin.com/in/SohamBangar
        </a>
      ),
    },

    echo: {
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow windowName={windowName} setwindowState={setwindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          typingSpeed={40}
          style={{
            flex: 1,
            overflowY: "scroll",
          }}
          welcomeMessage={`
╔══════════════════════════════════════╗
║   Welcome to Soham's Portfolio CLI   ║
╚══════════════════════════════════════╝
Type 'details' to see available commands
`}
          promptLabel={"Soham@portfolio:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
