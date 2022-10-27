import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MarketTable from "./components/marketTable";
import { Flasks } from "./data/flasks";

function App() {
  const [items, setItems] = useState([]);
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = (server, faction) => {
    setLoading(true);
    setWaiting(false);
    setItems([]);
    console.log(server + "-" + faction);
    for (let flask in Flasks) {
      fetch(
        "https://api.nexushub.co/wow-classic/v1/items/" +
          server +
          "-" +
          faction +
          "/" +
          Flasks[flask]
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setItems((prevItems) => [...prevItems, data]);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header fetchHandler={handleFetch} />
        {/* ToDo: component containing multiple market tables*/}
        <MarketTable
          items={items}
          waiting={waiting}
          loading={loading}
          error={error}
        />
      </header>
    </div>
  );
}

export default App;
