import { Button, Center } from "@chakra-ui/react";
import TeamListTeam from "../TeamListTeam";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from '@apollo/client';
import { QUERY_MYTEAMS } from '../../utils/queries';

const TeamList = ({ teams }) =>  {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { data } = useQuery(QUERY_MYTEAMS, {
    variables: {
      username: user?.email || user?.nickname || ''
    }
  });

  const me = data?.me || {};
  const myTeams = me?.teams || [];

  const addTeamRedirect = () => {
    navigate('/add_team', { replace: true });
  }

  console.log('Teams', teams);
  console.log('Me', me);
  
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
        {teams.length > 0 ? (teams.map((team) => {
          return <TeamListTeam username={me.username} team={team} key={team._id} myTeams={myTeams} />
        })) : (
          <Center>No teams found</Center>
        )}
      </div>
    </div>
  )
}

export default TeamList;