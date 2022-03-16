import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(undefined);

  const fetchMessage = async () => {
    const res = await fetch("/test");
    if (res.ok) {
      const data = await res.json();
      setMessage(data.message);
      setLoading(false);
    } else {
      setMessage("Oh no! an error must have occurred. ");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div className="App">{loading ? <p>Loading....</p> : <p>{message}</p>}</div>
  );
}

export default App;
