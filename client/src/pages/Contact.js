import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const submit = async () => {
    await axios.post("http://localhost:5000/contact", form);
    alert("Sent");
  };

  return (
    <div className="flex flex-col items-center mt-20 gap-4 text-white">
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <textarea placeholder="Message" onChange={e=>setForm({...form,message:e.target.value})}/>
      <button onClick={submit} className="bg-yellow-500 px-4 py-2">Send</button>
    </div>
  );
}