import "./App.css";
import Landing from "./components/Landing/Landing";
import Timeline from "./components/Timeline/Timeline";
import Prize from "./components/Prize/Prize";
import Faculty from "./components/Faculty/Faculty";
import Core from "./components/Core/Core";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
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
