import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ teams }) => {

  const [ currentPosition, setCurrentPosition ] = useState({});
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  
  return (
    <div className='mapContainer'>
      <LoadScript
        googleMapsApiKey='AIzaSyCGg82qFS6n3JqraQTDYZkR7XA28TeKtdo'>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={currentPosition} 
            >
            {
              currentPosition.lat &&
              ( 
                <Marker position={currentPosition} />
              ) 
            }
          </GoogleMap>
      </LoadScript>
     </div>
  )
}

export default MapContainer;