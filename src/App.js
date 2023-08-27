import React, { useEffect } from "react";
import SignupModal from "./components/modals/SignupModal";
import Nav from "./components/Nav";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginModal from "./components/modals/LoginModal";
import HomePage from "./components/HomePage";
import SubReddit from "./components/SubReddit";
import CommentModal from "./components/modals/CommentsModal";
import HomeSubReddit from "./components/HomeSubReddit";
import SubReddit1 from "./components/reusableComps/SubReddit1";
import SubReddit2 from "./components/reusableComps/SubReddit2";
import SubReddit3 from "./components/reusableComps/subredditComponents/SubReddit3";
import { updateBodyBgColor } from "./components/updateBodyBg";

function App() {

  // useEffect(() => {
  //   const pathname = window.location.pathname;
  //   updateBodyBgColor(pathname);
  // }, []);



  // bg-[#DAE0E6]
  return (
    <>
      <Router>
        <div className="min-h-screen">
          <Nav />
          <Routes>
            {/* <Route path="/signup" element={<SignupModal />} /> */}
            {/* <Route path="/login" element={<LoginModal />} /> */}
            <Route path="/comment" element={<CommentModal />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/subReddit/Everything" element={<SubReddit />} />
            <Route path="/subReddit/ProgrammerHumor/" element={<SubReddit1 />} />
            <Route path="/subReddit/Funny/" element={<SubReddit2/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;




// 1. need to implement comments loading with post id ( need to add a post id)

// 2. need to implmenet the dislike button if we are at 0 and no likes are on we can dislike the
// post


//3 maybe fix loading state abit better looks quite wack lol

// 4 make components more readable, very hard to read what componet does what

// 5 make the loading state comp reusable, and just fix up code to make readable.