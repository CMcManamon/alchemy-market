import React from "react";
import Currency from "../objects/currency";

const MarketRow = (props) => {
  const { item } = props; // json object (craftable)

  let itemName, matCost, sellValue, diff, valueStyle;
  // Null value checks
  if (item === null || item.name === null) return ""; // Don't add a table row

  itemName = item.name;
  if (item.marketValue === null) {
    matCost = "Unknown";
    sellValue = "Unknown";
    diff = "Unknown";
    valueStyle = "";
  } else {
    // ToDo: pass Currency objects to a Currency component for display
    matCost = new Currency(item.craftCost);
    sellValue = new Currency(item.marketValue);
    diff = Currency.subtract(sellValue, matCost);
    valueStyle = diff.value < 0 ? "negative" : "positive";
    matCost = matCost.getString(); // convert from Currency obj to string
    sellValue = sellValue.getString();
    diff = diff.getString();
  }

  return (
    <tr>
      <td>{itemName}</td>
      <td>{matCost}</td>
      <td>{sellValue}</td>
      <td className={"currency " + valueStyle}>{diff}</td>
    </tr>
  );
};
export default MarketRow;
