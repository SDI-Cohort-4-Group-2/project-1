//import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ArrivalMinutes from "./components/ArrivalMinutes";
import CrowdLevel from "./components/CrowdLevel";
import NextBus from "./components/NextBus";
import WheelchairFriendly from "./components/WheelchairFriendly";
import BusType from "./components/BusType";

function App() {
  return (
    <div className="App">
      <span className="bus">BUS</span>
      <span className="check">CHECK</span>

      <SearchBar />
      <div className="container">
        <ArrivalMinutes className="grid-col-span-2" />
        <CrowdLevel className="grid-col-span-2" />
        <NextBus className="grid-col-span-2" />
        <WheelchairFriendly className="grid-col-span-2" />
        <BusType className="grid-col-span-2" />
      </div>
    </div>
  );
}

export default App;
