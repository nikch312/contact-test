import { Box, List, ListItem } from "@chakra-ui/react";

export const Contact: React.FC = () => {
  return (
    <Box mt="4" h="calc(100vh - 208px)">
      <List spacing={3} border="1px solid #707070" h="100%">
        <ListItem>A</ListItem>
        <ListItem>B</ListItem>
        <ListItem>C</ListItem>
        <ListItem>D</ListItem>
        <ListItem>E</ListItem>
      </List>
    </Box>
  );
};
