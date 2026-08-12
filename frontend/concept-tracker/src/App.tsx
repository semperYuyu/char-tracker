import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
  
// this will render everything like main.tsx
function App() {


  return(
  <> 
    <BrowserRouter>
      <NavBar/>

      <Routes>

      </Routes>
    </BrowserRouter>
  </>
    )
}

export default App;