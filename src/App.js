import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import SideBar from './SideBar/SideBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import About from './About/About';
import Project from "./Projects/Project"
import Contact from "./Contact/Contact";
import ViewSlider from "./SideBar/viewSlider";
import Sendmsg from "./Contact/Sendmsg";

function App() {
  const [viewSlider, setviewSlider] = useState("none");

  const [open, setOpen] = useState("none");



const [Theme, setTheme] = useState(
  localStorage.getItem("PageMood") === null
  ? "light"
  : localStorage.getItem("PageMood") === "light"
  ? "light"
  : "dark"
);
const SidbarWidth = 250

const darkTheme = createTheme({
  palette: {
    mode: Theme ,
  },
});



  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Sendmsg  {...{open, setOpen}} />
      <ViewSlider {...{setviewSlider , viewSlider}} />
      <Router>
      <SideBar {...{setTheme , SidbarWidth , setviewSlider ,viewSlider}} />
      <Routes>
        <Route path='/'  element={<Home  {...{SidbarWidth}} />} />
        <Route path='/about'  element={<About   {...{SidbarWidth}} />}  />
        <Route path='/projects'  element={<Project   {...{SidbarWidth}} />}  />
        <Route path='/contact'  element={<Contact  {...{SidbarWidth ,open, setOpen}} />}  />
      </Routes>
    </Router>
      </ThemeProvider>

    </div>
  );
}

export default App;
