import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "90vh",
  height: "50vh",
};
const center = {
  lat: 22.418944172990752,
  lng: 91.81477909507716,
};

const Destination = () => {
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
            <input type="text" style={{ width: "20rem" }} required />
          </div>
          <div className="form-group">
            <label>Pick To</label>
            <br />
            <input type="text" style={{ width: "20rem" }} required />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-info"
              style={{ width: "20rem" }}
            >
              Search
            </button>
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
