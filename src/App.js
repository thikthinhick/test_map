import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./hello.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="App">
      <div id="map"></div>
    </div>
  );
}

export default App;
