import { Intro } from "./components/body";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Projects } from './components/Projects';
import { About } from "./components/about";
import  "./index.css";

function App() {
  return (
    <div className="">
     <Navbar></Navbar>
    <Intro></Intro>
    <About></About>
    <Projects></Projects>
    <Footer></Footer>
    </div>
  );
}

export default App;
