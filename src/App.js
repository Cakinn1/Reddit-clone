import React from "react";
import SignupModal from "./components/modals/SignupModal";
import Nav from "./components/Nav";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginModal from "./components/modals/LoginModal";
import HomePage from "./components/HomePage";
import SubReddit from "./components/SubReddit";

function App() {
  return (
    <>
      <Router>
        <div className="bg-[#DAE0E6] ">
          <Nav />
          <Routes>
            <Route path="/signup" element={<SignupModal />} />
            <Route path="/login" element={<LoginModal />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/subReddit/" element={<SubReddit />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

//pretty sure the signup and login modal shouldnt be a link
// need to fix that ASAP maybe navigate to the component or something
