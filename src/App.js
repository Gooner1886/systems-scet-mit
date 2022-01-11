import AboutPage from "./components/AboutPage/AboutPage"
import Landing from "./components/Landing/Landing"
import LoginPage from "./components/LoginPage/LoginPage"
<<<<<<< HEAD
import Designation from "./Designation";
=======
import {BrowserRouter, Routes, Route} from "react-router-dom";
>>>>>>> 8d8f82d80856f141f2478cdee29de008a4832880

function App() {
  return (
    <>
<<<<<<< HEAD
      <AboutPage/>
      {/* <Designation /> */}
      {/* <Landing/> */}
      {/* <LoginPage/> */}
=======
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
>>>>>>> 8d8f82d80856f141f2478cdee29de008a4832880
    </>
  );
}

export default App;
