import AboutPage from "./components/AboutPage/AboutPage";
import Landing from "./components/Landing/Landing";
import LoginPage from "./components/LoginPage/LoginPage";
import Construction from "./components/Construction"
import Cards from "./components/Cards"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/test" element={<Construction/>}/>
          <Route path="/card" element={<Cards name="Innovators Hub"/>}/>
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
