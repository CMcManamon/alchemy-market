import React from "react";
import Currency from "../objects/currency";

const MarketRow = (props) => {
  const { item } = props; // json object (craftable)

  let itemName, matCost, sellValue, diff;
  // Null value checks
  if (item === null || item.name === null) return ""; // Don't add a table row

  itemName = item.name;
  if (item.marketValue === null) {
    matCost = "Unknown";
    sellValue = "Unknown";
    diff = "Unknown";
  } else {
    matCost = "41.50.00";
    sellValue = new Currency(item.marketValue).getString();
    diff = "6.00.00";
  }

  return (
    <tr>
      <td>{itemName}</td>
      <td>{matCost}</td>
      <td>{sellValue}</td>
      <td>{diff}</td>
    </tr>
  );
};
export default MarketRow;
