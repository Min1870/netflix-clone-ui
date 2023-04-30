import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import RouteGuard from "./components/RouteGuard";

const App = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<RouteGuard><Home/></RouteGuard>} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
