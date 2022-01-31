import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "./PopUp";
import "./Header.css";
import logo from "./images/logo.svg";

function Header() {
  const navigate = useNavigate();
  const [firstPopup, setFirstPopup] = useState(false);
  const [secondPopup, setSecondPopup] = useState(false);
  return (
    <div className="header">
      <div className="headerItem1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="headerItem1">
        <h1 onClick={() => setFirstPopup(true)}>
          Time management style
        </h1>
      </div>
      <div className="headerItem1">
        <h1 onClick={() => setSecondPopup(true)}>How does it work?</h1>
      </div>
      <div className="headerItem2">log in</div>
      <div className="headerItem2">
        <button className="primaryButton" onClick={() => navigate("/signup")}>
          Sign up for free
        </button>
      </div>

      <Popup trigger={firstPopup} setTrigger={setFirstPopup}>
        <div>
          <h2>What is a time management style?</h2>
          <p>
            Your time management style is a way of describing how you plan and
            organise your tasks, in order to be most productive. Everyone is
            different, and so there's no one piece of advice that works for
            everyone when it comes to managing your time more efficiently.
          </p>
          <p>
            Which is why we at Schedule N believe the first step in improving
            your time management style is knowing what it is.
          </p>
          Start your journey by taking our quiz!
        </div>
      </Popup>
      <Popup trigger={secondPopup} setTrigger={setSecondPopup}>
        <div>
          <h2>How does it work?</h2>
          <p>
            The process is simple! Take our quiz to find out what your time
            management style is and get tailored advice of how to maximise your
            productivity that will suit your personality.
          </p>
          <p>
            We’ve gathered advice from people just like you, so that you can
            spend more time being produtcive
          </p>
        </div>
      </Popup>
    </div>
  );
}

function Header2() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="headerItem1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="headerItem1"></div>
      <div className="headerItem1"></div>
      <div className="headerItem2"></div>
      <div className="headerItem2">
        <button className="" onClick={() => navigate("")}>
          home
        </button>
      </div>
    </div>
  );
}

export default Header;
