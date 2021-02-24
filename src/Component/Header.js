import React from "react";

const Header = ({ onclick, onsearch, value, keyPress, nextCat, previous }) => {
  return (
    <>
      <nav className="main_nav">
        <h1 className="text">SheisaCatLover</h1>
        <ul className="header_Ul">
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
          <li>
            <button className="previousButton" onClick={previous}>
              Back{" "}
            </button>
          </li>
          <li>
            <button className="nextButton" onClick={nextCat}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
