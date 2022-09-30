import React from "react";

const MarketRow = (props) => {
  const { itemName, matCost, sellValue, diff } = props;
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
