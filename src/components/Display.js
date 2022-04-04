import React, { useState } from "react";
import API from "./API";
const svr = [
  {
    BusStopCode: "83139",
    Services: [
      {
        ServiceNo: "15",
        Operator: "GAS",
        NextBus: {
          OriginCode: "77009",
          DestinationCode: "77009",
          EstimatedArrival: "2022-04-04T10:32:19+08:00",
          Latitude: "1.319375",
          Longitude: "103.905076",
          VisitNumber: "1",
          Load: "SEA",
          Feature: "WAB",
          Type: "SD",
        },
        NextBus2: {
          OriginCode: "77009",
          DestinationCode: "77009",
          EstimatedArrival: "2022-04-04T10:33:57+08:00",
          Latitude: "1.3230823333333332",
          Longitude: "103.90550816666666",
          VisitNumber: "1",
          Load: "SEA",
          Feature: "WAB",
          Type: "SD",
        },
        NextBus3: {
          OriginCode: "77009",
          DestinationCode: "77009",
          EstimatedArrival: "2022-04-04T10:52:13+08:00",
          Latitude: "1.3460485",
          Longitude: "103.9344195",
          VisitNumber: "1",
          Load: "SEA",
          Feature: "WAB",
          Type: "SD",
        },
      },
    ],
  },
];

function ApiScreen() {
  // const [list, setList] = useState([]);
  const [time, setTime] = useState("");

  // async function findList() {
  //   const response = await API.get(`/BusArrivalv2`, {
  //     headers: {
  //       AccountKey: "HcXVAu/3TQ6F7Ymp1JHamA==",
  //       accept: "application/json",
  //     },
  //     params: {
  //       BusStopCode: "83139",
  //       ServiceNo: "15",
  //     },
  //   });

  //   if (response.status === 200) {
  //     setList(response.data);
  //   }
  //   console.log(JSON.stringify(list.Services));
  // }
  // findList();

  function timeDiff() {
    const timeDiff = Math.ceil((new Date(svr[0].Services[0].NextBus.EstimatedArrival) - new Date()) / 60000);
    setTime(timeDiff);
  }

  setTimeout(timeDiff);

  return (
    <>
      {/* <button onClick={callTime}>Time</button> */}
      <div>
        <p>Arriving in:</p>
        <h1>{time} mins</h1>
      </div>
      <div>
        <p>Bus {svr[0].Services[0].ServiceNo}</p>
        <p>Code {svr[0].BusStopCode}</p>
      </div>
    </>
  );
}

export default ApiScreen;
