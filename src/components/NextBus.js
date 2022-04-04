import React from "react";
import { MdOutlinePerson } from "react-icons/md";

function NextBus({ fetchData }) {
  console.log(`fetch 2`, fetchData);

  return (
    <>
      <div className="nextbus cards">
        <div className="word">Next Bus In</div>
        <div className="minutes">8 Mins</div>
        <MdOutlinePerson style={{ fontSize: "20px", padding: "0 0 10px 0" }} />
        <MdOutlinePerson style={{ fontSize: "20px", padding: "0 0 10px 0 " }} />
      </div>
    </>
  );
}

export default NextBus;
