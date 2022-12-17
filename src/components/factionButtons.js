import React, { useState } from "react";

const FactionButtons = () => {
  const [defaultFaction, setDefaultFaction] = useState(() => {
    //get stored faction value
    let faction = JSON.parse(localStorage.getItem("faction"));

    return faction || "alliance";
  });

  const onFactionButtonChanged = (event) => {
    localStorage.setItem("faction", JSON.stringify(event.target.value));
    setDefaultFaction(event.target.value);
  };

  return (
    <div>
      <label htmlFor="faction">Faction: </label>
      <input
        type="radio"
        id="alliance"
        value="alliance"
        name="faction"
        checked={defaultFaction === "alliance"}
        onChange={onFactionButtonChanged}
      />
      <label htmlFor="alliance" className="label-alliance">
        Alliance
      </label>
      <input
        type="radio"
        id="horde"
        value="horde"
        name="faction"
        checked={defaultFaction === "horde"}
        onChange={onFactionButtonChanged}
      />
      <label htmlFor="horde" className="label-horde">
        Horde
      </label>
    </div>
  );
};
export default FactionButtons;
