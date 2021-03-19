import React from "react";

const Transport = (props) => {
  return (
    <div className="col">
      <div class="card rounded" style={{ width: "18rem" }}>
        <img class="card-img-top p-4" src={props.img} width="100%" alt="" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Transport;
