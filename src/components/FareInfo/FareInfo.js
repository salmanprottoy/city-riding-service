import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FareInfo = (props) => {
  return (
    <div className="mt-3">
      <div className="d-flex">
        <div className="ml-3">
          <h6>
            <img
              className="m-2"
              src={props.transport.img}
              alt=""
              style={{ width: "1.8rem" }}
            />
            {props.transport.passenger}{" "}
            <FontAwesomeIcon className="mr-5" icon={faUsers} /> $
            {props.transport.price_1}
          </h6>
          <h6>
            <img
              className="m-2"
              src={props.transport.img}
              alt=""
              style={{ width: "1.8rem" }}
            />
            {props.transport.passenger}{" "}
            <FontAwesomeIcon className="mr-5" icon={faUsers} /> $
            {props.transport.price_2}
          </h6>
          <h6>
            <img
              className="m-2"
              src={props.transport.img}
              alt=""
              style={{ width: "1.8rem" }}
            />
            {props.transport.passenger}{" "}
            <FontAwesomeIcon className="mr-5" icon={faUsers} /> $
            {props.transport.price_3}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default FareInfo;
