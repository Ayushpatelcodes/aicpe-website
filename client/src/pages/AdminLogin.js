import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:5000/admin/login",{email,password});
    localStorage.setItem("token",res.data.token);
    window.location.href="/dashboard";
  };

  return (
    <div className="flex flex-col items-center mt-20 gap-4 text-white">
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
      <button onClick={login} className="bg-yellow-500 px-4 py-2">Login</button>
    </div>
  );
}