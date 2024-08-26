//OSK.js {On-screen keyboard}

import React, { useState } from "react";
import Draggable from "react-draggable";
import "../App.css";

export const OSK = ({ targetInput }) => {
  const [showSymbols, setShowSymbols] = useState(false);
  const [capsLock, setCapsLock] = useState(false);

  const handleKeyPress = (key) => {
    if (key === "Backspace") {
      targetInput.value = targetInput.value.slice(0, -1);
    } else if (key === "Next") {
      const formElements = Array.from(document.querySelectorAll("input, textarea, button"));
      const currentIndex = formElements.indexOf(targetInput);
      const nextElement = formElements[currentIndex + 1] || formElements[0];
      nextElement.focus();
    } else if (key === "Next") {
    } else {
      if (/[a-zA-Z]/.test(key)) {
        targetInput.value = targetInput.value + (capsLock ? key.toUpperCase() : key);
      } else {
        targetInput.value = targetInput.value + key;
      }
    }
    targetInput.dispatchEvent(new Event("input", { bubbles: true }));
  };  

  const toggleCapsLock = () => {
    setCapsLock(!capsLock);
  };

  const renderKeys = () => {
    const alphabetRows = [
      "qwertyuiop".split(""),
      "asdfghjkl".split(""),
      "zxcvbnm".split("")
    ];
  
    const symbolRows = [
      "!@#$%^&*()`~".split(""),
      "1234567890".split(""),
      "[]{}\\|;:'\",.<>?/".split("")
    ];
  
    const rows = showSymbols ? symbolRows : alphabetRows;
  
    if (!showSymbols) {
      rows[2].push("Toggle");
    } else {
      rows[1].splice(10, 0, "Toggle");
    }
  
    if (!showSymbols && !rows[0].includes("Caps")) {
      rows[0].unshift("Caps");
    }

    rows.push([
      "Next",  // Next field
      "Space",
      "⌫"   // Backspace
    ]);
  
    return rows.map((row, index) => (
      <div key={index} className="keyboard-row">
        {row.map((key) => {
          if (key === "Toggle") {
            return (
              <button
                key={key}
                className="key toggle-key"
                onClick={() => setShowSymbols(!showSymbols)}
              >
                {showSymbols ? "ABC" : "123"}
              </button>
            );
          }
          if (key === "Caps") {
            return (
              <button
                key={key}
                className="key caps-lock-key"
                onClick={toggleCapsLock}
              >
                {capsLock ? "Caps" : "Caps"}
              </button>
            );
          }
          // Handle Spacebar
          if (key === "Space") {
            return (
              <button
                key={key}
                className="key spacebar-key"
                onClick={() => handleKeyPress(" ")}
              >
                {key}
              </button>
            );
          }
          // Handle Backspace
          if (key === "⌫") {
            return (
              <button
                key={key}
                className="key symbol-key"
                onClick={() => handleKeyPress("Backspace")}
              >
                {key}
              </button>
            );
          }
          // Handle Next (Tab) key
          if (key === "Next") {
            return (
              <button
                key={key}
                className="key next-key"
                onClick={() => handleKeyPress("Next")}
              >
                {key}
              </button>
            );
          }
          return (
            <button key={key} className="key" onClick={() => handleKeyPress(key)}>
              {capsLock ? key.toUpperCase() : key}
            </button>
          );
        })}
      </div>
    ));
  };

  return (
    <Draggable handle=".drag-handle">
      <div className="keyboard">
        <div className="drag-handle">
          <span className="drag-text">Drag</span>
        </div>

        {renderKeys()}
      </div>
    </Draggable>
  );
};
