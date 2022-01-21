import React from "react";
import Transport from "../Transport/Transport";
import data from "../../data/data.json";
import { useState } from "react";
import { useEffect } from "react";

const Transports = () => {
  const [transports, setTransports] = useState([]);
  useEffect(() => {
    setTransports(data);
  }, []);
  return (
    <div className="transports m-5">
      <div className="row row-cols-md-4 justify-content-center p-5">
        {transports.map((transport) => (
          <Transport transport={transport} key={transport.id}></Transport>
        ))}
      </div>
    </div>
  );
};

export default Transports;
