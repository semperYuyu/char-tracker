import NavBar from "./components/NavBar";
import Discover from "./pages/Discover";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return(
  <> 
      <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/characters"} element={<Discover/>}/>
          <Route path={"/projects"} element={<Projects/>}/>
          <Route path={"/profile/:id"} element={<Profile/>}/> {/* Don't forget :variables are exposed and can be used */}
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/signup"} element={<Signup/>}/>
        </Routes>

      </BrowserRouter>
  </>
    )
}

export default App;