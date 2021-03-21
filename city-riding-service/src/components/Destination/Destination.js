import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import data from "../../data/data.json";
import FareInfo from "../FareInfo/FareInfo";

const containerStyle = {
  width: "100%",
  height: "50rem",
};
const center = {
  lat: 22.418944172990752,
  lng: 91.81477909507716,
};

const Destination = () => {
  let showFareInfo = false;
  const [transports, setTransports] = useState([]);
  useEffect(() => {
    setTransports(data);
  }, []);

  const handleSearch = () => {
    console.log("Searching");
    showFareInfo = true;
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCYX2VlJG3NntaJymDTWGa5w-n6l1X_qwE",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-between align-items-center m-5 rounded">
        <div className="map-selector p-4 col-md-6 text-left">
          <div className="form-group">
            <label>Pick From</label>
            <br />
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Pick To</label>
            <br />
            <input type="text" required />
          </div>
          <div>
            <button
              className="btn btn-info"
              style={{ width: "12rem" }}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div>
            {transports.map((transport) => (
              <FareInfo transport={transport} key={transport.id}></FareInfo>
            ))}
          </div>
        </div>
        <div className="map-area p-4 col-md-6">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <></>
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;
