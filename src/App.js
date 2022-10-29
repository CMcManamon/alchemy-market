import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MarketTable from "./components/marketTable";
import useDataFetcher from "./hooks/useDataFetcher";

function App() {
  const [server, setServer] = useState(null);
  const [faction, setFaction] = useState(null);

  const { items, loading, error } = useDataFetcher(server, faction);
  const handleFetch = (server, faction) => {
    setServer(server);
    setFaction(faction);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header fetchHandler={handleFetch} />
        {/* ToDo: component containing multiple market tables*/}
        <MarketTable items={items} loading={loading} error={error} />
      </header>
    </div>
  );
}

export default App;
