import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import data from "../../data/data.json";
import FareInfo from "../FareInfo/FareInfo";
import { useParams } from "react-router";

const containerStyle = {
  width: "100%",
  height: "23rem",
};
const center = {
  lat: 22.418944172990752,
  lng: 91.81477909507716,
};

const Destination = () => {
  let pickFrom = "";
  let pickTo = "";
  let showFareInfo = false;

  const { vehicle } = useParams();

  const [transports, setTransports] = useState([]);

  useEffect(() => {
    setTransports(data);
  }, []);

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

  const handleBlur = (e) => {
    if (e.target.name === "pickFrom") {
      pickFrom = e.target.value;
    }
    if (e.target.name === "pickTo") {
      pickTo = e.target.value;
    }
  };

  const handleSearch = () => {
    console.log(pickFrom + " To " + pickTo);
    showFareInfo = !showFareInfo;
    console.log(showFareInfo);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-between align-items-center m-5 rounded">
        <div className="map-selector p-4 col-md-6 text-left">
          <form>
            <div className="form-group">
              <label>Pick From</label>
              <br />
              <input type="text" required name="pickFrom" onBlur={handleBlur} />
            </div>
            <div className="form-group">
              <label>Pick To</label>
              <br />
              <input type="text" required name="pickTo" onBlur={handleBlur} />
            </div>
          </form>
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
            {transports.map(
              (transport) =>
                transport.title === vehicle && (
                  <FareInfo transport={transport} key={transport.id}></FareInfo>
                )
            )}
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
