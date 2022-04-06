import React from "react";
import { FiSearch } from "react-icons/fi";

import API from "./API";
import { useState } from "react";

export default function SearchBar(props) {
  const [busStopCode, setBusStopCode] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function getBusArrivalData(e) {
    e.preventDefault();
    const RESPONSE = await API.get("/BusArrivalv2", {
      headers: {
        AccountKey: "HcXVAu/3TQ6F7Ymp1JHamA==",
      },
      params: {
        BusStopCode: `${busStopCode}`,
        ServiceNo: `${busNumber}`,
      },
    }).catch(function (error) {
      if (error.response) {
        setErrorMsg(`error.response: ${error.response}`);
      } else if (error.request) {
        setErrorMsg(`error.request: ${error.request}`);
      } else {
        setErrorMsg(`error.message: ${error.message}`);
      }
    });

    if (RESPONSE.status === 200) {
      let data = RESPONSE.data;
      if (data.Services.length > 0) {
        props.fetchData({ data });
        setErrorMsg("");
      } else {
        setErrorMsg(`No bus service ${busNumber} at ${busStopCode}`);
      }
    }
  }

  function handleInput(e) {
    const FIELDNAME = e.target.name;

    switch (FIELDNAME) {
      case "busStopCode":
        setBusStopCode(e.target.value);
        break;
      case "busNumber":
        setBusNumber(e.target.value);
        break;
    }
  }

  return (
    <>
      <div className="search">
        <form onSubmit={getBusArrivalData}>
          <input
            type="text"
            placeholder="Enter Bus Stop Code"
            name="busStopCode"
            className="search-one"
            required
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Enter Bus Number"
            name="busNumber"
            className="search-two"
            required
            onChange={handleInput}
          />
          <button>
            <FiSearch style={{ color: "#fff", fontSize: "10px" }} />
          </button>
          <h3>{errorMsg}</h3>
        </form>
      </div>
    </>
  );
}
