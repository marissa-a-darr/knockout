import { Button, Center } from "@chakra-ui/react";
import TeamListTeam from "../TeamListTeam";

const TeamList = ({ teams }) =>  {

  const addTeamRedirect = () => {
    window.location.assign('/add_team');
  }

  console.log('Teams', teams);
  
  return (
    <div>
      <div className="addTeamContainer">
        <Center>
          <div>Add a team below!</div> <br />
        </Center>
        <Center>
          <Button colorScheme='teal' onClick={addTeamRedirect}>Add a Team</Button>
        </Center>
      </div>
      <div className="teamListContainer">
        {teams.map((team) => {
          return <TeamListTeam team={team} key={team._id} />
        })}
      </div>
    </div>
  )
}

export default TeamList;