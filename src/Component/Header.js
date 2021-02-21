import React from "react";

const Header = ({ onclick, onsearch, value, keyPress }) => {
  return (
    <div className="nav_1">
      <ul className="Unorder">
        <li className="text">SheisaCatLover</li>
        <li>
          <input
            className="input"
            type="text"
            placeholder="search Your Imagination"
            title="I will always love you"
            onChange={onsearch}
            value={value}
            onKeyPress={keyPress}
          />
        </li>
        <li>
          <button id="enterKey" Title="search for Cats" onClick={onclick}>
            Enter
          </button>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
