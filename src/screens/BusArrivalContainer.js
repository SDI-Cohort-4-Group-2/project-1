import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ArrivalMinutes from "../components/ArrivalMinutes";
import BusType from "../components/BusType";
import CrowdLevel from "../components/CrowdLevel";
import NextBus from "../components/NextBus";
import WheelchairFriendly from "../components/WheelchairFriendly";
import BusStops from "../components/data/BusStops.json";

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
            EstimatedArrival: "",
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

  useEffect(() => {
    getBusStopData();
  }, []);

  function getBusStopData() {
    let data = BusStops.value.map((item) => {
      return `${item.BusStopCode} - ${item.Description}`;
    });

    setBusStops(data);
  }

  return (
    <>
      <SearchBar fetchData={fetchData} busStops={busStops} />
      <div className="container">
        <ArrivalMinutes props={busArrival} />
        <CrowdLevel props={busArrival} />
        <NextBus busArrival={busArrival} />
        <WheelchairFriendly props={busArrival} />
        <BusType props={busArrival} />
      </div>
    </>
  );
}
