import {
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

const TeamListTeam = ({ team }) => {

  return (
    <div className="teamListTeamContainer">
      <List spacing={3}>
        <ListItem>Name: {team.name}</ListItem>
        <ListItem>Sport: {team.sport}</ListItem>
        <ListItem>Location: {team.city}, {team.state} {team.team_zip_code}</ListItem>
        <ListItem>Captain: {team.captain.username}</ListItem>
      </List>
    </div>
  )

}

export default TeamListTeam;