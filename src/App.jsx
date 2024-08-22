import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [picjupMessage, setPicjupMessage] = useState("");

  return (
    <div className="app-container">
      <h1>Hello</h1>
      <h1>𝑨𝒏𝒖𝒔𝒉𝒌𝒂😊</h1>
      <h2 className="special-heading">
        Our friendship is like a perfect chemical bond—strong, unbreakable, and
        with all the right words, we create the most beautiful reactions
        together.
      </h2>

      <div className="button-container">
        <button
          onClick={() =>
            setMessage(
              "You're feeling down, but remember, even the sun hides behind the clouds sometimes—just like my world feels cloudy without your smile. I'm here to bring the sunshine back into your day."
            )
          }
        >
          Click here
        </button>
        {message && <p className="message">{message}</p>}

        <button
          onClick={() =>
            setPicjupMessage(
              "Are you an expert in grammar? Because whenever you're around, you make all the wrongs in my world feel right."
            )
          }
        >
          Click here for pickup line
        </button>
        {picjupMessage && <p className="message">{picjupMessage}</p>}
      </div>

      <footer>
        <h2>Made by Kuldeep with ❤️</h2>
      </footer>
    </div>
  );
}

export default App;
