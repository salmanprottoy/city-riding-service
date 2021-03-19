import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100vh",
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
    <div className="container d-flex">
      <div className="map-selector m-2">
        <form action="">
          <div className="form-group">
            <label>Pick From</label>
            <br />
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Pick To</label>
            <br />
            <input type="text" />
          </div>
          <div>
            <button type="submit" className="btn btn-info">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="map-area m-2">
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
  );
};

export default Destination;
