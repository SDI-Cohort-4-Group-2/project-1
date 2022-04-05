import React from "react";
import { FiSearch } from "react-icons/fi";
import Autocomplete from "./Autocomplete/Autocomplete";
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
    })
      .catch(function (error) {
        if (error.response) {
          setErrorMsg(`error.response: ${error.response}`)
        } else if (error.request) {
          setErrorMsg(`error.request: ${error.request}`)
        } else {
          setErrorMsg(`error.message: ${error.message}`)
        }
      });

    if (RESPONSE.status === 200) {
      let data = RESPONSE.data;
      if (data.Services.length > 0) {
        props.fetchData({ data });
        setErrorMsg("");
      } else {
        setErrorMsg(`No bus service ${busNumber} at selected bus stop`);
      }
    }
  }

  function handleInput(e) {
    setBusNumber(e.target.value);
  }

  function fetchData(data) {
    const userInput = data;
    const busStopCode = userInput.substring(0, userInput.indexOf('-') - 1);
    setBusStopCode(busStopCode);
  }
  
  return (
    <>
      <div className="search">
        <form onSubmit={getBusArrivalData}>
          <Autocomplete fetchData={fetchData} busStops={props.busStops} />
          <input type="text" placeholder="Enter Bus Number" name="busNumber" className="search-two" required onChange={handleInput} />
          <button>
            <FiSearch style={{ color: "#fff", fontSize: "10px" }} />
          </button>
          <h3 className="error-msg">{errorMsg}</h3>
        </form>
      </div>
    </>
  )
}
