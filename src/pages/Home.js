import Dishes from "./dishes/Dishes";
import About from "./about/About";
import Menu from "./menu/Menu";
import Hero from "../components/home/Hero";
import '../assets/css/home.css'

function App() {
  return (
    <>
      <Hero />
      <Dishes />
      <About />
      <Menu />
    </>
  );
}

export default App;
