import React from "react";

const Header = () => {
  return (
    <div>
      This tool will help you choose the most profitable alchemy crafts in Wrath
      of the Lich King.
      <br />
      <label for="server-select">Choose your server:</label>
      <select name="server-select" id="server-select">
        <option value="empty"></option>
        <option value="benediction" selected>
          Benediction
        </option>
      </select>
      <br />
      <input type="checkbox" id="ah-fees" name="ah-fees" checked />
      <label for="ah-fees">AH fees</label>
      <br />
      <div class="slider-container">
        <br />
        Proc Chance 0% - 50%
        <br />
        <input type="range" min="0" max="10" value="5" />
      </div>
    </div>
  );
};
export default Header;
