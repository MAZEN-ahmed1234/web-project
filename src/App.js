import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills} from './components/Skills';
import { Projects } from './components/projects';
import { Contact } from "./components/contact";
import { Newsletter} from "./components/newsletter";
import { Footer } from "./components/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects/>
      <Contact />
      <Newsletter/>
        <Footer />
    </div>
  );
}

export default App;

