import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [contacts,setContacts]=useState([]);
  const [replyMap,setReplyMap]=useState({});

  const fetchData = async ()=>{
    const res = await axios.get("http://localhost:5000/contacts",{
      headers:{Authorization:localStorage.getItem("token")}
    });
    setContacts(res.data);
  };

  useEffect(()=>{fetchData();},[]);

  const del = async(id)=>{
    await axios.delete(`http://localhost:5000/contact/${id}`);
    fetchData();
  };

  const reply = async(id)=>{
    await axios.post(`http://localhost:5000/reply/${id}`,{
      reply:replyMap[id]
    });
    setReplyMap({...replyMap,[id]:""});
    fetchData();
  };

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl mb-6">Dashboard</h1>

      {contacts.map(c=>(
        <div key={c._id} className="bg-white/10 p-4 mb-4 rounded">
          <h2>{c.name}</h2>
          <p>{c.email}</p>
          <p>{c.message}</p>

          <input
            value={replyMap[c._id]||""}
            onChange={e=>setReplyMap({...replyMap,[c._id]:e.target.value})}
            placeholder="Reply..."
          />

          <button onClick={()=>reply(c._id)}>Reply</button>
          <button onClick={()=>del(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}