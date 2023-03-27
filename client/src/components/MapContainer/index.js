import React, { useState, useEffect } from 'react';
import { GoogleMap, InfoWindowF, LoadScript, MarkerF } from '@react-google-maps/api';

const MapContainer = ({ teams, currentPosition, setCurrentPosition }) => {

  const [ selected, setSelected ] = useState({});

  const onSelect = team => {
    setSelected(team);
  }

  useEffect(() => {

    const success = position => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setCurrentPosition(currentPosition);
    };

    navigator.geolocation.getCurrentPosition(success);
  }, [setCurrentPosition]);
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  console.log(currentPosition);
  
  return (
    <div className='mapContainer'>
      <LoadScript
        googleMapsApiKey='AIzaSyCGg82qFS6n3JqraQTDYZkR7XA28TeKtdo'>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={currentPosition} 
            >
            {
              teams.map(team => {
                return (
                  <MarkerF key={team.name} title={team.name} position={team.location} onClick={() => onSelect(team)} />
                )
              })
            }
            {
              selected.location && (
                <InfoWindowF
                  position={selected.location}
                  clickable={true}
                  onCloseClick={() => setSelected({})}
                >
                  <div className='mapInfoWindow'>
                    <ul>
                      <li>Name: {selected.name}</li>
                      <li>Address: {selected.address}, {selected.city}, {selected.state} {selected.team_zip_code}</li>
                      <li>Captain: {selected.captain.name ? (
                        <span>{selected.captain.name}, {selected.captain.username}</span>
                      ) : (
                        <span>{selected.captain.username}</span>
                      )
                      }</li>
                    </ul>
                  </div>
                </InfoWindowF>
              )
            }
          </GoogleMap>
      </LoadScript>
     </div>
  )
}

export default MapContainer;