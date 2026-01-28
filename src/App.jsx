import { useState } from "react";
import "./app.scss";
import Dock from "./Components/Dock";
import Navbar from "./Components/Navbar";
import Cli from "./Components/Windows/Cli";
import Github from "./Components/Windows/Github";
import Note from "./Components/Windows/Note";
import Resume from "./Components/Windows/Resume";
import Spotify from "./Components/Windows/Spotify";

function App() {
  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <main>
      <Navbar />
      <Dock windowState={windowState} setwindowState={setwindowState} />

      {windowState.github && (
        <Github windowName="github" setwindowState={setwindowState} />
      )}
      {windowState.note && (
        <Note windowName="note" setwindowState={setwindowState} />
      )}
      {windowState.resume && (
        <Resume windowName="resume" setwindowState={setwindowState} />
      )}
      {windowState.spotify && (
        <Spotify windowName="spotify" setwindowState={setwindowState} />
      )}
      {windowState.cli && (
        <Cli windowName="cli" setwindowState={setwindowState} />
      )}
    </main>
  );
}

export default App;
