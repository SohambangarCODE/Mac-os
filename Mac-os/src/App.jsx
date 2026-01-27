import "./app.scss";
import Dock from "./Components/Dock";
import Navbar from "./Components/Navbar";
import Github from "./Components/Windows/Github";


function App() {
  return (
    <main>
      <Navbar />
      <Dock />

      <Github />
    </main>
  );
}

export default App;
