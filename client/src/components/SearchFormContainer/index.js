import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
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
        <FormControl>
          <FormLabel>Radius:</FormLabel>
          <Select value={searchValues.radius} name="radius" onChange={handleChange.handleRadiusChange}>
            <option value='100000000'>Any</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
            <option value='200'>200</option>
          </Select>
        </FormControl>
      </form>
    </div>
  );

}

export default SearchFormContainer;