import React, { useState, useEffect } from "react";
import { useLazyQuery } from '@apollo/client';
import { Grid, GridItem } from '@chakra-ui/react';
import { SEARCH_TEAMS } from '../utils/queries';
import SearchFormContainer from "../components/SearchFormContainer";
import TeamList from "../components/TeamList";
import MapContainer from "../components/MapContainer";
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  minHeight: "100vh"

}

const Feed = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [radius, setRadius] = useState('100000000');
  const [currentPosition, setCurrentPosition] = useState({});
  const [initialLoad, setInitialLoad] = useState(false);

  const handleNameChange = (event) => setName(event.target.value);
  const handleSportChange = (event) => setSport(event.target.value);
  const handleStateChange = (event) => setState(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);
  const handleZipChange = (event) => setZip(event.target.value);
  const handleRadiusChange = (event) => setRadius(event.target.value);

  const [ searchTeams, { called, loading, data } ] = useLazyQuery(SEARCH_TEAMS, {
    variables: {
      name,
      sport,
      state,
      city,
      team_zip_code: zip,
      radius: Number(radius),
      latitude: currentPosition.lat,
      longitude: currentPosition.lng,
    }
  });

  const teamList = data?.searchTeams || []

  const searchValues = {
    name,
    sport,
    state,
    city,
    zip,
    radius,
  }

  const handleChange = {
    handleNameChange,
    handleSportChange,
    handleStateChange,
    handleCityChange,
    handleZipChange,
    handleRadiusChange,
  }

  useEffect(() => {
    if (!initialLoad) {
      searchTeams();
    }
    setInitialLoad(true);
  }, [initialLoad, searchTeams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchTeams();
  }

  return (
    <div className="container" style={myStyle}>
      <Grid templateColumns='repeat(5, 1fr)'>
        <GridItem colSpan={2} w='100%'>
          <SearchFormContainer searchValues={searchValues} handleChange={handleChange} handleSubmit={handleSubmit} loading={called && loading} />
          <MapContainer teams={teamList} currentPosition={currentPosition} setCurrentPosition={setCurrentPosition} />
        </GridItem>
        <GridItem colSpan={3} w='100%'>
          <TeamList teams={teamList} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Feed;
