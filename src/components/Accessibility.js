import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

export const Accessibility = () => {
  const [fontSize, setFontSize] = useState(16);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [highlightColor, setHighlightColor] = useState('#f1cd52');
  const utteranceRef = useRef(null);

  const increaseFontSize = () => setFontSize(prevSize => prevSize + 2);
  const decreaseFontSize = () => setFontSize(prevSize => (prevSize > 10 ? prevSize - 2 : prevSize));

  const handleTextToSpeech = () => {
    if (utteranceRef.current) {
      window.speechSynthesis.cancel();
    }
    const speech = new SpeechSynthesisUtterance(document.body.innerText);
    utteranceRef.current = speech;
    window.speechSynthesis.speak(speech);
  };

  const toggleHighlightLinks = () => setHighlightLinks(!highlightLinks);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const resetSettings = () => {
    setFontSize(16);
    setHighlightLinks(false);
    setHighlightColor('#f1cd52');
    window.speechSynthesis.cancel();
  };

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    const elementsToHighlight = document.querySelectorAll('a, button');
    elementsToHighlight.forEach(el => {
      if (highlightLinks) {
        el.style.backgroundColor = highlightColor;
        el.style.color = 'black';
        el.style.border = `2px solid ${highlightColor}`;
      } else {
        el.style.backgroundColor = '';
        el.style.color = '';
        el.style.border = '';
      }
    });
  }, [highlightLinks, highlightColor]);

  return (
    <div className={`accessibility-tab ${isExpanded ? 'expanded' : ''}`}>
      <button 
        className="accessibility-toggle" 
        onClick={toggleExpand}
        aria-expanded={isExpanded}
        aria-label="Accessibility Options"
      >
        <i className="bi bi-universal-access"></i>
      </button>
      {isExpanded && (
        <div className="accessibility-features">
          <button className="reset-button" onClick={resetSettings}>Reset</button>
          
          {/*<div className="font-size-controls">
            <span className="font-size-button decrease" onClick={decreaseFontSize}>A</span>
            <span className="font-size-label">Font Size</span>
            <span className="font-size-button increase" onClick={increaseFontSize}>A</span>
          </div>*/}

          <button onClick={handleTextToSpeech}>Read Aloud</button>
          <button onClick={toggleHighlightLinks}>
            {highlightLinks ? 'Disable Highlight' : 'Highlight Links'}
          </button>
          <div className="highlight-color-options">
            <button className="color-yellow" onClick={() => setHighlightColor('#f1cd52')}></button>
            <button className="color-blue" onClick={() => setHighlightColor('#3386ff')}></button>
            <button className="color-green" onClick={() => setHighlightColor('#0fd450')}></button>
            <button className="color-red" onClick={() => setHighlightColor('red')}></button>
          </div>
        </div>
      )}
    </div>
  );
};
