import React from "react";

const Header = ({ onclick, onsearch, value, keyPress }) => {
  return (
    <div className="nav_1">
      <nav>
        <ul className="nav_2">
          <li>
            <h1 className="text">SheisaCatLover</h1>
          </li>
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
