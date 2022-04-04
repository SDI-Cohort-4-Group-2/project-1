
import "./App.css";
import SearchBar from "./components/SearchBar";
import ArrivalMinutes from "./components/ArrivalMinutes";
import CrowdLevel from "./components/CrowdLevel";
import NextBus from "./components/NextBus";
import WheelchairFriendly from "./components/WheelchairFriendly";
import BusType from "./components/BusType";
import './App.css';
import BusArrivalContainer from './screens/BusArrivalContainer';


function App() {
  return (
    <div className="App">
      <span className="bus">BUS</span>
      <span className="check">CHECK</span>

      <SearchBar />
    <BusArrivalContainer />
      <div className="container">
        <ArrivalMinutes />
        <CrowdLevel />
        <NextBus />
        <WheelchairFriendly />
        <BusType />
      </div>

    
  );
}

export default App;
