import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MarketTable from "./components/marketTable";
import useDataFetcher from "./hooks/useDataFetcher";
import { Flasks } from "./data/flasks";
import { Elixirs } from "./data/elixirs";
import { Potions } from "./data/potions";

let allConsumeables = [...Flasks, ...Elixirs, ...Potions];
function App() {
  const [server, setServer] = useState(null);
  const [faction, setFaction] = useState(null);
  const [fee, setFee] = useState(true);
  const [procRate, setProcRate] = useState(0.15); // Default 15% proc rate

  // Fetch data for Consumeables
  const flaskData = useDataFetcher(server, faction, allConsumeables);
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
      <Footer />
    </div>
  );
}

export default App;
