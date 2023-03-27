import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  Button,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { JOIN_TEAM, LEAVE_TEAM } from '../../utils/mutations';

const TeamListTeam = ({ username, team, myTeams }) => {
  const [member, setMember] = useState(false);
  const [joinTeam] = useMutation(JOIN_TEAM);
  const [leaveTeam] = useMutation(LEAVE_TEAM);

  const joinTeamClick = async (event) => {
    try {
      console.log('Join team', {
        teamId: team._id,
        username,
      });
      await joinTeam({
        variables: {
          teamId: team._id,
          username,
        }
      });
      setMember(true);
    } catch (err) {
      console.error(err);
    }
  }

  const leaveTeamClick = async (event) => {
    try {
      console.log('Leave team', {
        teamId: team._id,
        username,
      });
      await leaveTeam({
        variables: {
          teamId: team._id,
          username
        }
      });
      setMember(false);
    } catch (err) {
      console.error('Leave Team Error', err);
    }
  }

  useEffect(() => {
    const isMember = () => {
      let result = false
      myTeams.forEach(myTeam => {
        console.log('isMember', team._id, myTeam._id, team._id === myTeam._id);
        if (team._id === myTeam._id) {
          result = true;
        }
      });
      setMember(result);
    }
    isMember();

  }, [setMember, myTeams, team._id])

  return (
    <div className="teamListTeamContainer">
      <List spacing={3}>
        <ListItem>
          Name: {team.name}
          {member ? (
            <Button className='leaveTeamButton' colorScheme='red' onClick={leaveTeamClick}>Leave Team</Button>
          ) : (
            <Button className='joinTeamButton' colorScheme='teal' onClick={joinTeamClick}>Join Team</Button>
          )
          }
        </ListItem>
        <ListItem>Sport: {team.sport}</ListItem>
        <ListItem>Location: {team.city}, {team.state} {team.team_zip_code}</ListItem>
        <ListItem>Captain: {team.captain.name ? (
            <span>{team.captain.name}, {team.captain.username}</span>
          ) : (
            <span>{team.captain.username}</span>
          )
        }</ListItem>
      </List>
    </div>
  )
}

export default TeamListTeam;