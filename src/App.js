import "./App.css";
import Core from "./components/Core/Core";
import Faculty from "./components/Faculty/Faculty";
import Footer from "./components/Footer/Footer";
import Prize from "./components/Prize/Prize";
import Team from "./components/Team/Team";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="App">
      <Timeline />
      <Prize />
      <Faculty />
      <Core />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
