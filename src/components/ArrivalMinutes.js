import { useEffect, useState } from "react";

function ArrivalMinutes({ props }) {
  const [time, setTime] = useState([]);

  function timeDiff() {
    const timeDiff = Math.round((new Date(props.data.Services[0].NextBus.EstimatedArrival) - new Date()) / 60000);
    setTime(() => {
      if (timeDiff > 0) {
        return timeDiff + " Mins";
      } else if (timeDiff <= 0) {
        return "Arriving";
      } else {
        return "-";
      }
    });
  }
  useEffect(() => {
    timeDiff();
  });

  return (
    <>
      <div className="arrival cards">
        <p className="arriving">Arriving In</p>
        <p className="minutes">{time}</p>
        <p className="busno bus-info">Bus {props.data.Services[0].ServiceNo}</p>
        <p className="bus-info">Bus Stop {props.data.BusStopCode}</p>
      </div>
    </>
  );
}

export default ArrivalMinutes;
