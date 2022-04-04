import React from "react";
import { MdOutlinePerson } from "react-icons/md";

function CrowdLevel() {
  return (
    <>
      <div className="crowd cards">
        <br />
        <MdOutlinePerson style={{ fontSize: "30px", padding: "0 0 10px 0" }} />
        <MdOutlinePerson style={{ fontSize: "30px", padding: "0 0 10px 0" }} />
        <MdOutlinePerson style={{ fontSize: "30px", padding: "0 0 10px 0" }} />
        <MdOutlinePerson style={{ fontSize: "30px", padding: "0 0 10px 0" }} />
        <div className="word">Crowded</div>
      </div>
    </>
  );
}

export default CrowdLevel;
