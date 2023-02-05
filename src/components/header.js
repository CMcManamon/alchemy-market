import React, { useState } from "react";
import ServerList from "./serverList";
import FactionButtons from "./factionButtons";

const Header = (props) => {
  const clickHandler = props.fetchHandler;
  const checkFeeHandler = props.feeHandler;
  const slideProcRateHandler = props.procRateHandler;
  const isLoading = props.isLoading;

  const DEFAULT_PROC_CHANCE = 15;

  const [procChance, setProcChance] = useState(() => {
    let storedProcChance = JSON.parse(localStorage.getItem("procRate"));
    if (storedProcChance === null) return DEFAULT_PROC_CHANCE;
    return storedProcChance * 5;
  });

  const [feeCheck, setFeeCheck] = useState(() => {
    let storedFeeCheck = JSON.parse(localStorage.getItem("feeCheck"));
    if (storedFeeCheck === null) return true;
    return storedFeeCheck;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    clickHandler(data.get(`server-select`), data.get(`faction`));
  };

  const handleFeeChanged = (event) => {
    let value = event.target.checked;
    localStorage.setItem("feeCheck", JSON.stringify(value));
    setFeeCheck(value);
    checkFeeHandler(value);
  };

  const handleProcRateChanged = (event) => {
    let currValue = event.target.value; // value 0 to 6 (0%, 5%, ..., 30%)
    localStorage.setItem("procRate", JSON.stringify(currValue));
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
                <ServerList
                  name="server-select"
                  id="server-select"
                ></ServerList>

                <FactionButtons />

                <div className="scan-button-container">
                  <button disabled={isLoading}>Scan</button>
                </div>
              </td>
              <td className="fees-checkbox">
                <label htmlFor="ah-fees">AH Fees</label>
                <input
                  type="checkbox"
                  id="ah-fees"
                  name="ah-fees"
                  checked={feeCheck}
                  onChange={handleFeeChanged}
                />

                <div className="slider-container">
                  <label htmlFor="procSlider">
                    Proc Chance - {procChance}%
                  </label>
                  <br />
                  <input
                    type="range"
                    id="procSlider"
                    name="procSlider"
                    min="0"
                    max="6"
                    defaultValue={procChance / 5}
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
