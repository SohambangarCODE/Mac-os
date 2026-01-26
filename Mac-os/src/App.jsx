import "./app.scss";
import Dock from "./Components/Dock";
import Navbar from "./Components/Navbar";
import MacWindow from "./Components/Windows/MacWindow";

function App() {
  return (
    <main>
      <Navbar />
      <Dock />

      <MacWindow>
        <h1>hellow</h1>
      </MacWindow>
    </main>
  );
}

export default App;
