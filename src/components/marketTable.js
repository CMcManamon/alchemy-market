import React from "react";
import MarketRow from "./marketRow";

const MarketTable = (props) => {
  const { items, loading, error, fee, procRate } = props;
  if (error != null) return error;
  let loadHeader = (
    <div className="loadHeader">
      {loading === true ? "Retrieving data..." : ""}
    </div>
  );
  if (items === undefined || items.length === 0) return loadHeader;

  let rows = [];
  for (let i in items) {
    let item = items[i];
    rows.push(
      <MarketRow key={item.itemId} item={item} fee={fee} procRate={procRate} />
    );
  }
  return (
    <div className="market-container">
      {loadHeader}
      <table className="market-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>List Price</th>
            <th>Craft Cost</th>
            <th>
              <div className="tooltip">
                Est. Value*
                <span className="tooltiptext">
                  Evaluates proc chance and fees
                  <br />
                  Flasks produce 2 items naturally
                </span>
              </div>
            </th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <br />
    </div>
  );
};
export default MarketTable;
