import React, { useState } from "react";
import ServerList from "./serverList";

const Header = (props) => {
  const clickHandler = props.fetchHandler;
  const checkFeeHandler = props.feeHandler;
  const slideProcRateHandler = props.procRateHandler;

  const DEFAULT_PROC_CHANCE = 15;

  const [procChance, setProcChance] = useState(DEFAULT_PROC_CHANCE);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    clickHandler(data.get(`server-select`), data.get(`faction`));
  };

  const handleFeeChanged = (event) => {
    checkFeeHandler(event.target.checked);
  };

  const handleProcRateChanged = (event) => {
    let currValue = event.target.value;
    setProcChance(currValue * 5);
    slideProcRateHandler(currValue * 0.05); // 5% per tick
  };

  return (
    <div>
      <h1>Alchemy Price Checker</h1>
      <h2>A lookup tool for alchemy recipes in WoW's WotLK expansion</h2>
      <br />{" "}
      <form onSubmit={handleSubmit}>
        <table className="header-table">
          <tbody>
            <tr>
              <td className="server-faction-scan-container">
                <label htmlFor="server-select">Server: </label>
                <ServerList
                  name="server-select"
                  id="server-select"
                  defaultServer="benediction"
                ></ServerList>

                <br />
                <label htmlFor="faction">Faction: </label>
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
                <div className="scan-button-container">
                  <button>Scan</button>
                </div>
              </td>
              <td className="fees-checkbox">
                <label htmlFor="ah-fees">AH Fees</label>
                <input
                  type="checkbox"
                  id="ah-fees"
                  name="ah-fees"
                  defaultChecked
                  onChange={handleFeeChanged}
                />

                <div className="slider-container">
                  <label htmlFor="procSlider">
                    Proc Chance - {procChance}%
                  </label>
                  <br />
                  <input
                    type="range"
                    name="procSlider"
                    min="0"
                    max="6"
                    defaultValue="3"
                    onChange={handleProcRateChanged}
                  />
                  <br />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default Header;
