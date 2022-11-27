import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MarketTable from "./components/marketTable";
import useDataFetcher from "./hooks/useDataFetcher";
import { Flasks } from "./data/flasks";

function App() {
  const [server, setServer] = useState(null);
  const [faction, setFaction] = useState(null);
  const [fee, setFee] = useState(true);
  const [procRate, setProcRate] = useState(0); // ToDo: change default to 15%

  // Fetch data for Flasks
  const flaskData = useDataFetcher(server, faction, Flasks);
  //console.log("flaskData: ", flaskData);
  //console.log("flaskData.items: ", flaskData.items);
  const flasks = flaskData.items;
  const loading = flaskData.loading;
  const error = flaskData.error;

  // Submitting form in Header sets server and faction values,
  // which will force rerender and use the data fetcher
  const handleFetch = (server, faction) => {
    setServer(server);
    setFaction(faction);
  };

  const handleFee = (fee) => {
    setFee(fee);
  };

  const handleProcRate = (procRate) => {
    setProcRate(procRate);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header
          fetchHandler={handleFetch}
          feeHandler={handleFee}
          procRateHandler={handleProcRate}
        />
        {/* ToDo: component containing multiple market tables*/}
        <MarketTable
          items={flasks}
          loading={loading}
          error={error}
          fee={fee}
          procRate={procRate}
        />
      </header>
    </div>
  );
}

export default App;
