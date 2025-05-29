import { LandingPage } from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { SmoothCursor } from "@/components/ui/smooth-cursor";
import News from "./components/News";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/news' element={<News/>}/>
      </Routes>
      <SmoothCursor />

    </>
  )
}

export default App
