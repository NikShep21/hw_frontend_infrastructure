import { useState } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from "unique-names-generator";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");

  const generateName = () => {
    const randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, animals],
      separator: " ",
      style: "capital",
    });

    setName(randomName);
  };

  return (
    <div className="app">
      <h1>Random Name Generator</h1>

      <div className="result">
        {name || "Click the button to generate a name"}
      </div>

      <button onClick={generateName}>Generate name</button>
    </div>
  );
}
