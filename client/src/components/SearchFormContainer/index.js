import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const SearchFormContainer = ({ searchValues, handleChange, handleSubmit, loading }) =>  {
  return (
    <div className="searchFormContainer">
      <h2>Filter</h2>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Team Name:</FormLabel>
          <Input placeholder="Team Name" value={searchValues.name} name="name" onChange={handleChange.handleNameChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Sport:</FormLabel>
          <Input placeholder="Sport" value={searchValues.sport} name="sport" onChange={handleChange.handleSportChange} />
        </FormControl>
        <FormControl>
          <FormLabel>State:</FormLabel>
          <Input placeholder="State" value={searchValues.state} name="state" onChange={handleChange.handleStateChange} />
        </FormControl>
        <FormControl>
          <FormLabel>City:</FormLabel>
          <Input placeholder="City" value={searchValues.city} name="city" onChange={handleChange.handleCityChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Zip Code:</FormLabel>
          <Input placeholder="Zip Code" value={searchValues.zip} name="team_zip_code" onChange={handleChange.handleZipChange} />
        </FormControl>
      </form>
    </div>
  );

}

export default SearchFormContainer;