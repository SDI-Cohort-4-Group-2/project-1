import "./App.css";
import ArrivalMinutes from "./screens/ArrivalMinutes";
import CrowdLevel from "./screens/CrowdLevel";
import NextBus from "./screens/NextBus";
import WheelchairFriendly from "./screens/WheelchairFriendly";
import BusType from "./screens/BusType";
import "./App.css";
import BusArrivalContainer from "./screens/BusArrivalContainer";

function App() {
  return (
    <div className="App">
      <span className="bus">BUS</span>
      <span className="check">CHECK</span>

      <BusArrivalContainer />
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
