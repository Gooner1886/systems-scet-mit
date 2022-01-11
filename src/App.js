import AboutPage from "./components/AboutPage/AboutPage"
import Landing from "./components/Landing/Landing"
import LoginPage from "./components/LoginPage/LoginPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route
                    path="/login"
                    element={<LoginPage />}
                />
                <Route path="/about" element={<AboutPage />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
