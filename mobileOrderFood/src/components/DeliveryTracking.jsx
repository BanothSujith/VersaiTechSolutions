import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader, DirectionsRenderer } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const initialDeliveryLocation = { lat: 37.7808, lng: -122.4110 };
const customerLocation = { lat: 37.7700, lng: -122.4200 };

const DeliveryTracking = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your actual API key
  });

  const mapRef = useRef(null);
  const [deliveryLocation, setDeliveryLocation] = useState(initialDeliveryLocation);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const directionsService = new window.google.maps.DirectionsService();
    
    directionsService.route(
      {
        origin: deliveryLocation,
        destination: customerLocation,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error("Error fetching directions", status);
        }
      }
    );

    // Create Advanced Markers
    const map = mapRef.current.state.map; // Get map instance

    if (map) {
      const deliveryMarker = new window.google.maps.marker.AdvancedMarkerElement({
        position: deliveryLocation,
        map: map,
        title: "Delivery 🛵",
      });

      const customerMarker = new window.google.maps.marker.AdvancedMarkerElement({
        position: customerLocation,
        map: map,
        title: "Customer 🏠",
      });
    }
  }, [isLoaded, deliveryLocation]);

  if (!isLoaded) return <div>Loading Google Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={deliveryLocation}
      zoom={13}
      onLoad={(map) => (mapRef.current = { state: { map } })}
    >
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default DeliveryTracking;
