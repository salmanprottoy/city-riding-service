import React from "react";
import Transport from "../Transport/Transport";
import bike from "../../img/bike.png";
import car from "../../img/car.png";
import bus from "../../img/bus.png";
import train from "../../img/train.png";

const Transports = () => {
  return (
    <div className="transports m-5">
      <div className="row row-cols-md-4 justify-content-center p-5">
        <Transport title={"Bike"} img={bike}></Transport>
        <Transport title={"Car"} img={car}></Transport>
        <Transport title={"Bus"} img={bus}></Transport>
        <Transport title={"Train"} img={train}></Transport>
      </div>
    </div>
  );
};

export default Transports;
