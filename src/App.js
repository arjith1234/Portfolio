import Navbar from "./components/navbar/navbar";
import Intro from "./components/navbar/Intro/intro";
import Skills from "./components/navbar/skills/skills";
import ContactMe from "./components/navbar/contact";
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Skills/>
       <ContactMe/>
    </div>
  );
}

export default App;