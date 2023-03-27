import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Button,  FormControl,  Input, FormLabel, Textarea } from "@chakra-ui/react";
import { useMutation, useQuery } from '@apollo/client';
import { EDIT_PROFILE } from '../utils/mutations';
import { QUERY_MYTEAMS } from '../utils/queries';
const myStyle = {
color: "white", 
  backgroundColor: "#000000",
  padding: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  minHeight: "100vh"
}

const EditProfile = () => {
  const navigate = useNavigate();
  const {user} = useAuth0();
  const username = user?.email || user?.nickname || '';
  const { data } = useQuery(QUERY_MYTEAMS, {
    variables: {
      username: user?.email || user?.nickname || ''
    }
  });

  const defaultMe = {
    name: '',
    state: '',
    city: '',
    zip: '',
    bio: '',
  }

  const me = data ? data.me : defaultMe;

  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [bio, setBio] = useState('');
  let isSubmitting = false;

  const handleNameChange = (event) => setName(event.target.value);
  const handleStateChange = (event) => setState(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);
  const handleZipChange = (event) => setZip(event.target.value);
  const handleBioChange = (event) => setBio(event.target.value);

  const [editProfile] = useMutation(EDIT_PROFILE);

  const handleSubmit = async (event) => {
    event.preventDefault();
    isSubmitting = true;
    const profile = {
      username,
      name,
      state,
      city,
      zip,
      bio,
    }
    console.log('Profile', profile);
    try {
      const { data } = await editProfile({
        variables: profile
      });
      
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    isSubmitting = false;
    navigate('/profile', { replace: true });
  }

  const cancelChanges = (event) => {
    event.preventDefault();
    navigate('/profile', { replace: true });
  }

  useEffect(() => {
    console.log('useEffect Edit Profile me', me);
    if (me.name) {
      setName(me.name);
    }

    if (me.city) {
      setCity(me.city);
    }

    if (me.zip) {
      setZip(me.zip);
    }
    
    if (me.state) {
      setState(me.state);
    }
    
    if (me.bio) {
      setBio(me.bio);
    }
  }, [me]);

  return (
    <div className="container" style={myStyle}>
         
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input placeholder="Enter Your Name" value={name} name="name" onChange={handleNameChange} />
        </FormControl>
        <FormControl>
          <FormLabel>City:</FormLabel>
          <Input placeholder="Enter Your City" value={city} name="city" onChange={handleCityChange} />
        </FormControl>
        <FormControl>
          <FormLabel>State:</FormLabel>
          <Input placeholder="Enter Your State" value={state} name="state" onChange={handleStateChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Zipcode:</FormLabel>
          <Input placeholder="Enter Your Zipcode" value={zip} name="zip" onChange={handleZipChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Bio:</FormLabel>
          <Textarea placeholder="Enter something about yourself for your bio!" value={bio} name="bio" onChange={handleBioChange} size='md' />
        </FormControl>
        <Button className="submitProfileChanges" mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>Submit</Button>
        <Button className="cancelProfileChanges" mt={4} onClick={cancelChanges}>Cancel</Button>
            {/* <Text fontSize={"30px"}>Upload a Photo for your Profile!</Text> <input type="file" accept="image/*"  fontSize="25px" />
            <br /> */}
      </form>
    </div>
  );
};

export default EditProfile;