import React from "react";
import { MdOutlinePerson } from "react-icons/md";

function CrowdLevel() {
  return (
    <>
      <div className="crowd cards">
        <div className="word">Crowded</div>
        <br />
        <MdOutlinePerson style={{ fontSize: "40px", padding: "0 0 10px 0" }} />
        <MdOutlinePerson style={{ fontSize: "40px", padding: "0 0 10px 0" }} />
        <MdOutlinePerson style={{ fontSize: "40px", padding: "0 0 10px 0" }} />
        <MdOutlinePerson style={{ fontSize: "40px", padding: "0 0 10px 0" }} />
      </div>
    </>
  );
}

export default CrowdLevel;
