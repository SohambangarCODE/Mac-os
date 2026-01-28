import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({windowName, setwindowState}) => {

  const commands = {

    help: {
      fn: () => `
Available Commands:
------------------
help        -> Show all commands
about       -> About me
skills      -> My technical skills
projects    -> My projects
contact     -> Contact information
github      -> GitHub profile
linkedin    -> LinkedIn profile
whoami     -> Who am I
clear       -> Clear terminal
`,
    },

    clear: {
      fn: (helpers) => helpers.clear(),
    },

    whoami: {
      fn: () => (
        <span style={{ color: "#ffcc00" }}>
          Soham Bangar - Full Stack Developer
        </span>
      ),
    },

    about: {
      fn: () => (
        <div>
          <span style={{ color: "#00ff00" }}>
            Hi 👋 I'm Soham Bangar
          </span>
          <br />
          <span style={{ color: "#00ffff" }}>
            Full-Stack Developer | Problem Solver
          </span>
          <br /><br />
          <span>
            I love building interactive web applications and turning ideas
            into real-world products.
          </span>
        </div>
      ),
    },

    skills: {
      fn: () => (
        <div>
          <span style={{ color: "#00ff00" }}>Frontend</span>
          <br />- HTML, CSS, JavaScript
          <br />- React, Tailwind CSS
          <br /><br />

          <span style={{ color: "#00ff00" }}>Backend</span>
          <br />- Node.js, Express
          <br />- MongoDB, SQL
          <br /><br />

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
          <br /><br />
          More coming soon 🚀
        </div>
      ),
    },

    contact: {
      fn: () => (
        <div>
          Email: soham@example.com
          <br />
          Location: Maharashtra, India
        </div>
      ),
    },

    github: {
      fn: () => (
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#58a6ff" }}
        >
          https://github.com/yourusername
        </a>
      ),
    },

    linkedin: {
      fn: () => (
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0a66c2" }}
        >
          https://linkedin.com/in/yourusername
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
          noDefaults={true}
          commands={commands}
          typingSpeed={40}
          welcomeMessage={`
╔══════════════════════════════════════╗
║   Welcome to Soham's Portfolio CLI   ║
╚══════════════════════════════════════╝
Type 'help' to see available commands
`}
          promptLabel={"Soham@portfolio:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
