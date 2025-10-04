import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 43.6532,   // Toronto latitude
    longitude: -79.3832, // Toronto longitude
    zoom: 11,
  });

  return (
    <div className="map_wrap">
      <div className="map">
        <ReactMapGL
          mapStyle={"mapbox://styles/mapbox/dark-v9"}
          mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
    </div>
  );
};

export default Map;
