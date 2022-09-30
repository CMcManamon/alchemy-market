import "./App.css";
import Header from "./components/header";
import MarketTable from "./components/marketTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MarketTable />
      </header>
    </div>
  );
}

export default App;
