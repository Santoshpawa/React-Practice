import React, { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapView = React.memo(({ center }) => {
  const options = useMemo(
    () => ({
      disableDefaultUI: false,
      zoomControl: true,
    }),
    []
  );

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      options={options}
    >
      <Marker position={center} />
    </GoogleMap>
  );
});

export default MapView;
