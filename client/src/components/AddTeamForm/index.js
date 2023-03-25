import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";


const AddTeamForm = () =>  {
  const { isAuthenticated, user } = useAuth0();
  console.log('isAuthenticated', isAuthenticated);
  console.log('user', user);
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  let isSubmitting = false;

  const handleNameChange = (event) => setName(event.target.value);
  const handleSportChange = (event) => setSport(event.target.value);
  const handleStateChange = (event) => setState(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);
  const handleZipChange = (event) => setZip(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    isSubmitting = true;
    const team = {
      name,
      sport,
      state,
      city,
      zip,
      captain: user
    }
    console.log(team);
    setTimeout(() => {
      isSubmitting = false;
    }, 500);
  }

  if (isAuthenticated) {
    return (
      <div className="addTeamFormContainer">
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Team Name:</FormLabel>
            <Input placeholder="Team Name" value={name} name="name" onChange={handleNameChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Sport:</FormLabel>
            <Input placeholder="Sport" value={sport} name="sport" onChange={handleSportChange} />
          </FormControl>
          <FormControl>
            <FormLabel>State:</FormLabel>
            <Input placeholder="State" value={state} name="state" onChange={handleStateChange} />
          </FormControl>
          <FormControl>
            <FormLabel>City:</FormLabel>
            <Input placeholder="City" value={city} name="city" onChange={handleCityChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Zip Code:</FormLabel>
            <Input placeholder="Zip Code" value={zip} name="team_zip_code" onChange={handleZipChange} />
          </FormControl>
          <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>Add Team</Button>
        </form>
      </div>
    );
  } else {
    window.location.assign('/');
  }

}

export default AddTeamForm;