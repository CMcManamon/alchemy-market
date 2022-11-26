import React from "react";
import ServerList from "./serverList";

const Header = (props) => {
  const clickHandler = props.fetchHandler;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    clickHandler(data.get(`server-select`), data.get(`faction`));
  };

  return (
    <div>
      Make that money money in WotLK.
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="server-select">Choose your server: </label>
        <ServerList
          name="server-select"
          id="server-select"
          defaultValue="benediction"
        ></ServerList>

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
        <input type="checkbox" id="ah-fees" name="ah-fees" defaultChecked />
        <label htmlFor="ah-fees">AH fees</label>
        <div className="slider-container">
          <br />
          Proc Chance - 0%
          <br /> 0%
          <input type="range" min="0" max="6" defaultValue="3" />
          30%
          <br />
          <button>Scan</button>
          <br />
        </div>
      </form>
    </div>
  );
};
export default Header;
