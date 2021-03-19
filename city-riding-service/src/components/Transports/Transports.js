import React from "react";
import Transport from "../Transport/Transport";
import bike from "../../img/bike.png";
import car from "../../img/car.png";
import bus from "../../img/bus.png";
import train from "../../img/train.png";

const Transports = () => {
  return (
    <div className="transports ml-5 mr-5">
      <div className="row row-cols-md-4 justify-content-center mt-5 p-3">
        <Transport title={"Bike"} img={bike}></Transport>
        <Transport title={"Car"} img={car}></Transport>
        <Transport title={"Bus"} img={bus}></Transport>
        <Transport title={"Train"} img={train}></Transport>
      </div>
    </div>
  );
};

export default Transports;
