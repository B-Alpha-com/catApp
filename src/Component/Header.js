import React from "react";

const Header = ({ onclick, onsearch, value, keyPress }) => {
  return (
    <>
      <nav className="main_nav">
        <ul className="header_Ul">
          <li>
            <h1 className="text">SheisaCatLover</h1>
          </li>
          <li className="li_input">
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
            <button
              className="enterKey"
              id="enterKey"
              Title="search for Cats"
              onClick={onclick}
            >
              Enter
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
