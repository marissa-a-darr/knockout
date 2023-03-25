import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Text,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";

const myStyle = {
  backgroundColor: "#000000",
  padding: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  height: "100vh",
};

const TeamList = (teams) => {
  if (!teams.length) {
    return (
      <div>
        <Text fontSize={"30px"} color={"white"}>
          No Teams Yet!
        </Text>
      </div>
    );
  }
};

const MyTeamList = ({ teams }) => {
  return (
    <div>
      {teams &&
        teams.map((team) => (
          <div key={team._id}>
            <TableContainer>
              <Table variant="simple" color={"white"}>
                <Thead>
                  <Tr>
                    <Th>Team Name{team.name}</Th>
                    <Th>City{team.city}</Th>
                    <Th>Captain Name{team.captain.username}</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{team.name}</Td>
                    <Td>{team.city}</Td>
                    <Td>{team.captain.username}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
           
          </div>
        ))}
    </div>
  );
};

export default MyTeamList;