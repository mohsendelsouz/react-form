import {Routes, Route} from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Nav } from "./components/Nav";

const App = () => {
  return <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
    </Routes>
  </>;
}

export default App
