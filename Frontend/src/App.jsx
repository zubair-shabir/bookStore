import { useState } from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

import Courses from "./Courses/Courses";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
