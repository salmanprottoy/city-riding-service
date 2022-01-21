import React from "react";
import { Link } from "react-router-dom";

const Transport = (props) => {
  return (
    <div className="col mb-5">
      <div class="card text-center h-100 shadow bg-white g-3 p-4 m-2 rounded border-0">
        <Link
          to={`/destination/${props.transport.title}`}
          className="text-decoration-none text-dark"
        >
          <img
            class="card-img-top p-4"
            src={props.transport.img}
            style={{ width: "100%" }}
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">{props.transport.title}</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Transport;
