import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import { useState, useEffect } from "react";

function NextBus({ busArrival }) {
  // console.log(`fetch 2`, busArrival.data.Services[0].ServiceNo);
  // console.log(`fetch3`, busArrival.data.Services);
  // console.log(
  //   `fetching estimated arrival time`,
  //   busArrival.data.Services[0].NextBus2.EstimatedArrival
  // );

  const [timeTwo, setTimeTwo] = useState([]);
  const [load, setLoad] = useState("");

  const timeArrivalTwo = busArrival.data.Services[0].NextBus2.EstimatedArrival;
  // console.log(`time arrival two`, timeArrivalTwo);
  let currDate = new Date();

  let currentDate = String(currDate).match(/\d\d:\d\d/);
  // console.log(currentDate[0]);

  let estimatedArrive = String(timeArrivalTwo).match(/\d\d:\d\d/);
  // console.log(`results???`, estimatedArrive[0]);

  var currentDateFormat = String(currentDate).split(":");
  var currDateSeconds = +currentDateFormat[0] * 3600 + +currentDateFormat[1];
  // console.log(`cdS`, currDateSeconds);

  let estimatedArrFormat = String(estimatedArrive).split(":");
  let currEstimatedSec = +estimatedArrFormat[0] * 3600 + +estimatedArrFormat[1];
  let diffTime = currEstimatedSec - currDateSeconds;
  // console.log(`time difference`, diffTime);

  const seats = busArrival.data.Services[0].NextBus2.Load;
  // console.log(`seats???????`, seats);

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
          ) : load === "" ? (
            <MdOutlinePerson
              style={{
                fontSize: "20px",

                color: "#8f3636",
              }}
            />
          ) : (
            `No Info Yet :( )`
          )}
        </span>
      </div>
    </>
  );
}

export default NextBus;
