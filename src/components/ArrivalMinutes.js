import { useState } from "react";

function ArrivalMinutes({ props }) {
  const [time, setTime] = useState([]);

  function timeDiff() {
    const timeDiff = Math.ceil((new Date(props.data.Services[0].NextBus.EstimatedArrival) - new Date()) / 60000);
    setTime(timeDiff);
  }
  setTimeout(timeDiff);

  return (
    <>
      <div className="arrival cards">
        <p className="arriving">Arriving In</p>
        <p className="minutes">{time} Mins</p>
        <p className="busno bus-info">Bus {props.data.Services[0].ServiceNo}</p>
        <p className="bus-info">Bus Stop {props.data.BusStopCode}</p>
      </div>
    </>
  );
}

export default ArrivalMinutes;
