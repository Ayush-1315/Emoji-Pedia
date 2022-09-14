import "./styles.css";
import React, { useState } from "react";
// let user = prompt("Enter your name");
var emojiData = {
  "🕳️": "Hole",
  "💣": "Bomb",
  "🛀": "Person taking a bath",
  "💈": "Barber Pole",
  "🧭": "Compass",
  "🌡️": "Thermometer",
  "🎎": "Japanese Dolls",
  "🏺": "Amphora",
  "⛱️": "Umbrella on Ground",
  "🎐": "Wind Chime",
  "🤿": "Diving Mask",
  "🧿": "Nazar Amulet",
  "🏮": "Red paper lantern"
};
var emojis = Object.keys(emojiData);
export default function App() {
  const [emoji, setMeaning] = useState("Please Enter Something");
  function searchEmoji(event) {
    var userInput = event.target.value;
    var meaning = emojiData[userInput];
    // console.log(userInput);
    if (userInput === "") {
      return setMeaning("Please Enter Something");
    }
    if (emojiData[userInput] === undefined) {
      return setMeaning("Emoji is not persent in our database");
    }
    setMeaning(meaning);
  }
  function emojiClicked(item) {
    var meaning = emojiData[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 id="title">Welcome to Emojipedia</h1>
      <input
        type="text"
        placeholder="Enter an Emoji"
        onChange={searchEmoji}
      ></input>
      <h2 className="Output">{emoji}</h2>
      <div>
        {emojis.map((item) => {
          return (
            <span
              key={item}
              onClick={function () {
                emojiClicked(item);
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
