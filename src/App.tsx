import React from "react";
import { join } from "path";
import logo from "./logo.svg";
import "./App.css";

function App() {
  React.useEffect(() => {
    fetch(join(process.env.PUBLIC_URL, "/data/test.json"))
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Yo yo yo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
