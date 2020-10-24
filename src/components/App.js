import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [paragraph, setparagraph] = useState(false);
  const handleChange = () => {
    setparagraph(true);
  };
  return (
    <div id="main">
      <button id="click" onClick={handleChange}>
        click
      </button>
      {paragraph ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}

export default App;
