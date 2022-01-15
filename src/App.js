import AboutPage from "./components/AboutPage/AboutPage";
import Landing from "./components/Landing/Landing";
import LoginPage from "./components/LoginPage/LoginPage";
import Construction from "./components/Construction";
import Curriculum from "./components/Curriculum/Curriculum"
import Cards from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Logged from "./components/context.js";
import Club from "./components/Club";
import Research from "./components/Research/research";

const cards = [
  {
    name: "Innovators Hub",
    image: "https://i.ibb.co/m9H2hW9/IH-logo.jpg",
    department: "CSE",
    type: "Tech",
    summary:
      "The major goal of Innovators Hub, which was founded in 2018, is to use technology, research, and innovation to address people's everyday concerns. Similarly, their goal is to establish an atmosphere in which students of our college can develop their projects, personalities, and ideas and make them market-ready. They provide students a platform where they may acquire the highly important personality development skill sets and the vital nontechnical talents that assist a student's profile stand out from the crowd, from project management to research to deployment. Their club is a space where students are free to explore, learn, and invent. ",
    events: "https://drive.google.com/file/d/1v6nVSLYhj73ygSfDKABOXUj1j-6cNbA3/view?usp=sharing",
    achievements: "https://drive.google.com/file/d/1B7nxJXGrhmZo40OU1Jy0zadeKfSLtPoz/view?usp=sharing",
    clubNo: 1
  },
  {
    name: "SWE",
    image: "https://i.ibb.co/DPdQRHT/SWE-logo.jpg ",
    department: "CSE",
    type: "Tech",
    summary:
      "Summary : The Society of Women Engineers, is a non profit organization, a key to enhance the quality of life and carry ahead the value of diversity. The overall professional development is the ultimate mission of this affiliate group. It was inaugurated on 29th August 2018. It focuses on the development of students for a better professional life, enhanced career growth and networking.",
    events: "https://drive.google.com/file/d/11a-j0gFvAh-H4FwBuyQIrsxWrajrEyvQ/view?usp=sharing",
    achievements: "https://drive.google.com/file/d/1Q1vcpjucrEW_AI93yo76yED-YXJC3UvT/view?usp=sharing",
    clubNo: 2
  },
  {
    name: "GDSC",
    image: "https://i.ibb.co/G2xRzc5/GDSC-logo.jpg",
    department: "CSE",
    type: "Tech",
    summary:
      "Google Developer Student Clubs (GDSC), MIT-WPU is a community group for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcomed by the chapter. By joining GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
    events: "https://drive.google.com/file/d/1r__lObbHgpXFZFXRJs_swfQQ2C5EaxM5/view?usp=sharing",
    achievements: "# ",
    clubNo: 3
  },

];

function App() {
  const [logged, setlogged] = useState(false);

  return (
    <Logged.Provider value={{ value: logged, setter: setlogged }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/test" element={<Construction />} />
          <Route path="/curr" element={<Curriculum/>}/>
          <Route path="/card" element={<Cards cards={cards}/>} />
          <Route path="/card/:clubNo" element={<Club clubDetails = {cards}/>} />
          <Route path="/club" element={<Club />} />
          <Route path="/researchpublication/:id" element={<Research/>}/>
        </Routes>
      </BrowserRouter>{" "}
    </Logged.Provider>
  );
}

export default App;
