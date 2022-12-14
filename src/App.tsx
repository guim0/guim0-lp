import "./App.css";
import { NavBar } from "./components/NavBar/Index";
import { About } from "./page/About";
import { Home } from "./page/Home";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Home />
      <About />
    </main>
  );
}

export default App;
