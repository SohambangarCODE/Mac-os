import "./app.scss";
import Dock from "./Components/Dock";
import Navbar from "./Components/Navbar";
import Cli from "./Components/Windows/Cli";
import Github from "./Components/Windows/Github";
import Note from "./Components/Windows/Note";
import Resume from "./Components/Windows/Resume";
import Spotify from "./Components/Windows/Spotify";

function App() {
  return (
    <main>
      <Navbar />
      <Dock />

      <Github />
      <Note />
      <Resume />
      <Spotify />
      <Cli />
    </main>
  );
}

export default App;
