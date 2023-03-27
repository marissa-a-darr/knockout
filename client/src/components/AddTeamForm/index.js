import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_TEAM } from '../../utils/mutations';


const AddTeamForm = () =>  {
  const { user } = useAuth0();
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  let isSubmitting = false;

  const handleNameChange = (event) => setName(event.target.value);
  const handleSportChange = (event) => setSport(event.target.value);
  const handleStateChange = (event) => setState(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);
  const handleZipChange = (event) => setZip(event.target.value);

  const [addTeam, { error }] = useMutation(ADD_TEAM);

  const handleSubmit = async (event) => {
    event.preventDefault();
    isSubmitting = true;
    const team = {
      name,
      sport,
      address,
      state,
      city,
      team_zip_code: zip,
      captain: user.email
    }
    console.log('Team to add', team);
    try {
      const { data } = await addTeam({
        variables: team
      });
      
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    isSubmitting = false;
    window.location.assign('/feed');
  }

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
          <FormLabel>Address:</FormLabel>
          <Input placeholder="Address" value={address} name="address" onChange={handleAddressChange} />
        </FormControl>
        <FormControl>
          <FormLabel>City:</FormLabel>
          <Input placeholder="City" value={city} name="city" onChange={handleCityChange} />
        </FormControl>
        <FormControl>
          <FormLabel>State:</FormLabel>
          <Input placeholder="State" value={state} name="state" onChange={handleStateChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Zip Code:</FormLabel>
          <Input placeholder="Zip Code" value={zip} name="team_zip_code" onChange={handleZipChange} />
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>Add Team</Button>
      </form>
    </div>
  );

}

export default AddTeamForm;