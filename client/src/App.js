import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AboutCA from "./pages/AboutCA";
import Roadmap from "./pages/Roadmap";
import Eligibility from "./pages/Eligibility";
import Challenges from "./pages/Challenges";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar har page pe dikhega */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about-ca" element={<AboutCA />} />
<Route path="/roadmap" element={<Roadmap />} />
<Route path="/eligibility" element={<Eligibility />} />
<Route path="/challenges" element={<Challenges />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;