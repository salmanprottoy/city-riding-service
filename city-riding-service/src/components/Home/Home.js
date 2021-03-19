import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Transports from "../Transports/Transports";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Transports />
      <Footer />
    </div>
    
  );
};

export default Home;
