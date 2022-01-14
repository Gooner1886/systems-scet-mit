import AboutPage from "./components/AboutPage/AboutPage";
import Landing from "./components/Landing/Landing";
import LoginPage from "./components/LoginPage/LoginPage";
import Construction from "./components/Construction";
import Cards from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Logged from "./components/context.js";
import Club from "./components/Club";

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
          <Route path="/card" element={<Cards />} />
          <Route path="/club" element={<Club />} />
        </Routes>
      </BrowserRouter>{" "}
    </Logged.Provider>
  );
}

export default App;
