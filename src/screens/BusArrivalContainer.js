import API from "../components/API";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ArrivalMinutes from "../components/ArrivalMinutes";
import BusType from "../components/BusType";
import CrowdLevel from "../components/CrowdLevel";
import NextBus from "../components/NextBus";
import WheelchairFriendly from "../components/WheelchairFriendly";

export default function BusArrivalContainer() {
  const defaultState = {
    data: {
      BusStopCode: "",
      Services: [
        {
          ServiceNo: "",
          Operator: "",
          NextBus: {
            OriginCode: "",
            DestinationCode: "",
            EstimatedArrival: new Date(),
            Latitude: "",
            Longitude: "",
            VisitNumber: "",
            Load: "",
            Feature: "",
            Type: "",
          },
          NextBus2: {
            OriginCode: "",
            DestinationCode: "",
            EstimatedArrival: new Date(),
            Latitude: "",
            Longitude: "",
            VisitNumber: "",
            Load: "",
            Feature: "",
            Type: "",
          },
          NextBus3: {
            OriginCode: "",
            DestinationCode: "",
            EstimatedArrival: new Date(),
            Latitude: "",
            Longitude: "",
            VisitNumber: "",
            Load: "",
            Feature: "",
            Type: "",
          },
        },
      ],
    },
  };
  const [busStops, setBusStops] = useState([]);
  const [busArrival, setBusArrival] = useState(defaultState);

  function fetchData(data) {
    setBusArrival(data);
  }

  // useEffect(() => {
  //     getBusStopData();

  // }, [])

  async function getBusStopData() {
    const RESPONSE = await API.get("/BusStops", {
      headers: {
        AccountKey: "HcXVAu/3TQ6F7Ymp1JHamA==",
      },
    });

    let data = RESPONSE.data.value.map((item) => {
      return {
        BusStop: item.BusStopCode,
        RoadName: item.RoadName,
        Desc: item.Description,
      };
    });

    setBusStops(data);
  }

  console.log(JSON.stringify(busArrival));

  return (
    <>
      <SearchBar fetchData={fetchData} />
      <div className="container">
        <ArrivalMinutes props={busArrival} />
        <CrowdLevel />
        <NextBus busArrival={busArrival} />
        <WheelchairFriendly />
        <BusType />
      </div>
    </>
  );
}
