import React from 'react';
import clock from './images/clock2x.svg';

function App() {
    return (
<div className="mainContainer">
  <div className="textContainer">
    <div>
      <h1>manage your time based on your personality and your preferences</h1>
      <h2>Take a quiz and personalize your time management</h2>
    </div>
    <div>
      <button className="primaryButton" onClick={() => console.log('Click')}>
            Take a Quiz
      </button>
      <p>Learn about your type</p>
    </div>
  </div>
    <img src={clock} alt="Clock between day and night}" />
</div>
    );
}


export default App;
