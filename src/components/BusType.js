import React from "react";
import { IoBusOutline } from "react-icons/io5";
import { MdDirectionsBusFilled, MdOutlineBusAlert } from "react-icons/md";

function BusType() {
  return (
    <>
      <div className="bustype cards">
        {/* <IoBusOutline style={{ fontSize: "50px", padding: "10px" }} />
        <div>Double Deck</div> */}

        {/* <MdDirectionsBusFilled style={{ fontSize: "50px", padding: "10px" }} />
        <div>Single Deck</div> */}

        <MdOutlineBusAlert style={{ fontSize: "50px", padding: "10px" }} />
        <div>Bendy</div>
      </div>
    </>
  );
}

export default BusType;
