import NavBar from "./components/NavBar";
import Discover from "./pages/Discover";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/App.css";



const queryClient = new QueryClient();

function App() {

  return(
  <> 
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/discover"} element={<Discover/>}/>
          <Route path={"/projects/:id"} element={<Projects/>}/>
          <Route path={"/profile/:id"} element={<Profile/>}/> {/* Don't forget :variables are exposed and can be read from useParams */}
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/signup"} element={<Signup/>}/>
        </Routes>

      </BrowserRouter>
    </QueryClientProvider>
  </>
    )
}

export default App;