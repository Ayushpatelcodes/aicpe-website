import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-black text-white">
      <h1 className="text-yellow-400 text-xl font-bold">AICPE</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>      {/* 👈 add this */}
        <Link to="/signup">Signup</Link>    {/* 👈 add this */}
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
}