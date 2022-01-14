import AboutPage from "./components/AboutPage/AboutPage";
import Landing from "./components/Landing/Landing";
import LoginPage from "./components/LoginPage/LoginPage";
import Construction from "./components/Construction";
import Cards from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Logged from "./components/context.js";
import Club from "./components/Club";
import Research from "./components/Research/research";

const cards = [
  {
    name: "Innovators Hub",
    image: "./thumb1.png",
    department: "CSE",
    type: "Tech",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever sincethe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    events: "https://www.innovators-hub.in/events",
    achievements: "https://www.innovators-hub.in/achievements",
    clubNo: 1
  },
  {
    name: "Innovators Hub",
    image: "./thumb1.png",
    department: "CSE",
    type: "Tech",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever sincethe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    events: "https://www.innovators-hub.in/events",
    achievements: "https://www.innovators-hub.in/achievements",
    clubNo: 2
  },
  {
    name: "Innovators Hub",
    image: "./thumb1.png",
    department: "CSE",
    type: "Tech",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever sincethe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    events: "https://www.innovators-hub.in/events",
    achievements: "https://www.innovators-hub.in/achievements",
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
