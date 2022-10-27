import React from "react";

const Header = (props) => {
  const clickHandler = props.fetchHandler;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    clickHandler(data.get(`server-select`), data.get(`faction`));
  };

  return (
    <div>
      This tool will help you choose the most profitable alchemy crafts in Wrath
      of the Lich King.
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="server-select">Choose your server:</label>
        <select
          name="server-select"
          id="server-select"
          defaultValue={`benediction`}
        >
          <option value="empty"></option>
          <option value="benediction">Benediction</option>
        </select>
        <br />
        <input
          type="radio"
          id="alliance"
          value="alliance"
          name="faction"
          defaultChecked
        />
        <label htmlFor="alliance">Alliance</label>
        <input type="radio" id="horde" value="horde" name="faction" />
        <label htmlFor="horde">Horde</label>
        <br />
        <br />
        <br />
        <input type="checkbox" id="ah-fees" name="ah-fees" defaultChecked />
        <label htmlFor="ah-fees">AH fees</label>
        <br />
        <div className="slider-container">
          <br />
          Proc Chance 0% - 50%
          <br />
          <input type="range" min="0" max="10" defaultValue="5" />
          <button>Scan</button>
        </div>
      </form>
    </div>
  );
};
export default Header;
