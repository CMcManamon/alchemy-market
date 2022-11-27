import React from "react";
import Currency from "../objects/currency";

const MarketRow = (props) => {
  const { item, fee, procRate } = props;

  let itemName, matCost, sellValue, totalSellValue, diff, valueStyle, itemImg;
  let feeModifier = fee ? 0.95 : 1;
  // Null value checks
  if (item === null || item.name === null) return ""; // Don't add a table row

  itemName = item.name;
  if (item.marketValue === null) {
    matCost = "Unknown";
    sellValue = "Unknown";
    totalSellValue = "Unknown";
    diff = "Unknown";
    valueStyle = "";
    itemImg = "";
  } else {
    // ToDo: pass Currency objects to a Currency component for display
    matCost = new Currency(item.craftCost);
    sellValue = new Currency(item.marketValue);
    totalSellValue = item.marketValue * feeModifier * (item.amount + procRate);
    totalSellValue = new Currency(Math.ceil(totalSellValue));
    diff = Currency.subtract(totalSellValue, matCost);
    valueStyle = diff.value < 0 ? "negative" : "positive";
    matCost = matCost.getString(); // convert from Currency obj to string
    sellValue = sellValue.getString();
    totalSellValue = totalSellValue.getString();
    diff = diff.getString();
    itemImg = <img className="item-icon" src={item.icon} alt={itemName}></img>;
  }

  return (
    <tr>
      <td>
        {itemImg}
        {itemName}
      </td>
      <td>{sellValue}</td>
      <td>{matCost}</td>
      <td>{totalSellValue}</td>
      <td className={"currency " + valueStyle}>{diff}</td>
    </tr>
  );
};
export default MarketRow;
