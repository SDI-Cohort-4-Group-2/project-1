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
        <ArrivalMinutes />
        <CrowdLevel />
        <NextBus />
        <WheelchairFriendly />
        <BusType />
      </div>
    </div>
  );
}

export default App;
