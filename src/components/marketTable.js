import React from "react";
import MarketRow from "./marketRow";

const MarketTable = (props) => {
  const { items, waiting, loading, error } = props;
  if (waiting) return "";
  if (loading) return "Loading...";
  if (error) return "Error!";

  let rows = [];
  for (let i in items) {
    let item = items[i];
    rows.push(<MarketRow key={item.itemId} item={item} />);
  }
  return (
    <div id="market-container">
      <table id="market-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mats Cost</th>
            <th>Sell Value</th>
            <th>Diff</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
export default MarketTable;
