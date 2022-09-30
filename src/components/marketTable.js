import React from "react";
import MarketRow from "./marketRow";

const MarketTable = () => {
  let itemName = "Flask of Relentless Assault";
  let matCost = "41.50.00";
  let sellValue = "47.50.00";
  let diff = "6.00.00";
  return (
    <div id="market-container">
      <table id="market-table">
        <thead>
          <td>Name</td>
          <td>Mats Cost</td>
          <td>Sell Value</td>
          <td>Diff</td>
        </thead>
        <MarketRow
          itemName={itemName}
          matCost={matCost}
          sellValue={sellValue}
          diff={diff}
        />
      </table>
    </div>
  );
};
export default MarketTable;
