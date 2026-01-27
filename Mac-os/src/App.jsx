import "./app.scss";
import Dock from "./Components/Dock";
import Navbar from "./Components/Navbar";
import Github from "./Components/Windows/Github";
import Note from "./Components/Windows/Note";
import Resume from "./Components/Windows/Resume";


function App() {
  return (
    <main>
      <Navbar />
      <Dock />

      <Github />
      <Note />
      <Resume />
    </main>
  );
}

export default App;
