import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Transport = (props) => {
  const history = useHistory();
  const handleDestination = () => {
    history.push("/destination");
  };
  return (
    <div className="col mb-5">
      <div
        class="card text-center h-100 shadow bg-white g-3 p-3 rounded border-0 m-2"
        onClick={() => handleDestination()}
        style={{ width: "18rem" }}
      >
        <img
          class="card-img-top p-4"
          src={props.img}
          style={{ width: "16rem" }}
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Transport;
