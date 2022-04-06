import React from "react";
import { MdOutlinePerson } from "react-icons/md";

function CrowdLevel({ props }) {
  function crowdDisplay() {
    if (props.data.Services[0].NextBus.Load === "SEA") {
      return (
        <>
          <MdOutlinePerson
            style={{ fontSize: "30px", padding: "0 0 10px 0" }}
          />
          <div>Seats Available</div>
        </>
      );
    } else if (props.data.Services[0].NextBus.Load === "SDA") {
      return (
        <>
          <MdOutlinePerson
            style={{ fontSize: "30px", padding: "0 0 10px 0" }}
          />
          <MdOutlinePerson
            style={{ fontSize: "30px", padding: "0 0 10px 0" }}
          />
          <MdOutlinePerson
            style={{ fontSize: "30px", padding: "0 0 10px 0" }}
          />
          <div>Standing Available</div>
        </>
      );
    } else if (props.data.Services[0].NextBus.Load === "LSD") {
      return (
        <>
          <MdOutlinePerson
            style={{ fontSize: "30px", padding: "0 0 10px 0" }}
          />
          <MdOutlinePerson
            style={{ fontSize: "30px", padding: "0 0 10px 0" }}
          />
          <MdOutlinePerson
            style={{ fontSize: "30px", padding: "0 0 10px 0" }}
          />
          <MdOutlinePerson
            style={{ fontSize: "30px", padding: "0 0 10px 0" }}
          />
          <div>Limited Standing</div>
        </>
      );
    } else {
      return (
        <>
          <div style={{ fontSize: "30px", padding: "10px 0 10px 0" }}>-</div>
        </>
      );
    }
  }

  return (
    <>
      <div className="crowd cards">
        <div>Crowd Level</div>
        <br></br>
        {crowdDisplay()}
      </div>
    </>
  );
}

export default CrowdLevel;
