import { render } from "@testing-library/react";
import React from "react";
import { MdAccessible } from "react-icons/md";

function WheelchairFriendly({ props }) {
  function renderwheelchair() {
    if (props.data.Services[0].NextBus.Feature === "WAB") {
      return (
        <>
          <MdAccessible style={{ fontSize: "50px", padding: "7px" }} />
          <div>Wheelchair Friendly</div>
        </>
      );
    } else if (
      props.data.Services[0].ServiceNo !== "" &&
      props.data.Services[0].NextBus.Feature === ""
    ) {
      return (
        <>
          <p className="word">NOT</p>
          <div>Wheelchair Friendly</div>
        </>
      );
    } else if (props.data.Services[0].ServiceNo === "")
      return (
        <>
          {" "}
          <div style={{ fontSize: "30px", padding: "21px 0 21px 0" }}>-</div>
        </>
      );
  }
  return (
    <>
      <div className="friendly cards">{renderwheelchair()}</div>
    </>
  );
}

export default WheelchairFriendly;
