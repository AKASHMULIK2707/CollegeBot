import { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I am College Bot,You ask about Fees,Time and Subject" }
  ]);
  const [input, setInput] = useState("");

  const collegeInfo = {
    FEES: "BSc AI  fees ₹45,000 ahe.",
    TIME: "College Morning 9 te 3.30.",
    SUBJECT: "Sem 3  - Python, DBMS, Maths.",
    SIR: "HOD - Patil Sir, Teacher - Deshmukh Madam",
    HOILDAY: "Sunday,2nd and 4th saturday.",
    SEATS: "120 Avaliable."
  };

  const sendMessage = () => {
    if (!input) 
      return;
    const userMsg = { from: "user", text: input };
    let reply = "I don't Understand.Ask about 'fees', 'time', 'subject' asa vichar.";
    let q = input.toUpperCase();
    for (let key in collegeInfo) {
      if (q.includes(key)) {
        reply = collegeInfo[key];
        break;
      }
    }
    setMessages([...messages, userMsg, { from: "bot", text: reply }]);
    setInput("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>🤖 College AI Bot - React</h2>
      <div style={{ border: "1px solid #ccc", height: "350px", overflowY: "scroll", padding: "10px" }}>
        {messages.map((m, i) => (
          <p key={i} style={{ textAlign: m.from === "user" ? "right" : "left", background: m.from === "user" ? "#dcf8c6" : "#eee", padding: "8px", borderRadius: "10px" }}>
            {m.text}
          </p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ask here....ex.fees?"
        style={{ width: "75%", padding: "10px", marginTop: "10px" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px 20px", marginLeft: "5px" }}>Send</button>
    </div>
  );
}
export default App;