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

const MyTeamList = ({ teams }) => {
  return (
    <div>
      <TableContainer>
        <Table variant="simple" color={"white"}>
          <Thead>
            <Tr>
              <Th>Team Name</Th>
              <Th>City</Th>
              <Th>Captain Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teams &&
              teams.map((team) => (
                  <Tr key={team._id}>
                    <Td>{team.name}</Td>
                    <Td>{team.city}</Td>
                    <Td>{team.captain.username}</Td>
                  </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>   
    </div>
  );
};

export default MyTeamList;