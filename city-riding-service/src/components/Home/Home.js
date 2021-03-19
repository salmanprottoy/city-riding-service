import React from "react";
import Header from "../Header/Header";
import Transports from "../Transports/Transports";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Transports />
    </div>
  );
};

export default Home;
