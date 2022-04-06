import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import { useState, useEffect } from "react";

function NextBus({ busArrival }) {
  const [timeTwo, setTimeTwo] = useState([]);
  const [load, setLoad] = useState("");

  const timeArrivalTwo = busArrival.data.Services[0].NextBus2.EstimatedArrival;
  let currDate = new Date();

  let currentDate = String(currDate).match(/\d\d:\d\d/);

  let estimatedArrive = String(timeArrivalTwo).match(/\d\d:\d\d/);

  var currentDateFormat = String(currentDate).split(":");
  var currDateSeconds = +currentDateFormat[0] * 60 + +currentDateFormat[1];

  let estimatedArrFormat = String(estimatedArrive).split(":");
  let currEstimatedSec = +estimatedArrFormat[0] * 60 + +estimatedArrFormat[1];
  let diffTime = currEstimatedSec - currDateSeconds;

  const seats = busArrival.data.Services[0].NextBus2.Load;

  useEffect(() => {
    setTimeTwo(diffTime);
    setLoad(seats);
  }, [diffTime, seats]);

  return (
    <>
      <div className="nextbus cards">
        <div className="word">Next Bus In</div>

        <div className="minutes">
          {" "}
          {timeTwo > 0 ? `${timeTwo} Mins` : ` - `}{" "}
        </div>
        <span className="icons-padding">
          {load === "SDA" ? (
            <>
              <MdOutlinePerson style={{ fontSize: "20px" }} />
              <MdOutlinePerson style={{ fontSize: "20px" }} />
            </>
          ) : load === "LSD" ? (
            <>
              <MdOutlinePerson style={{ fontSize: "20px" }} />
              <MdOutlinePerson style={{ fontSize: "20px" }} />
              <MdOutlinePerson style={{ fontSize: "20px" }} />
              <MdOutlinePerson style={{ fontSize: "20px" }} />
            </>
          ) : load === "SEA" ? (
            <>
              <MdOutlinePerson style={{ fontSize: "20px" }} />
            </>
          ) : (
            <MdOutlinePerson
              style={{
                fontSize: "20px",
                color: "#8f3636",
              }}
            />
          )}
        </span>
      </div>
    </>
  );
}

export default NextBus;
