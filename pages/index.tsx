import { Box, Button, Flex, Input } from "@chakra-ui/react";

import { Profile } from "../components/profile";
import { Contact } from "../components/contact";

const IndexPage: React.FC = () => {
  return (
    <Flex
      as="main"
      w="calc(100% - 32px)"
      h="calc(100vh - 32px)"
      m={4}
      p={8}
      border="1px solid #707070"
    >
      <Box w="30%">
        <Input border="1px solid #707070 !important" />
        <Contact />
        <Button w="100%" mt={4}>
          Add
        </Button>
      </Box>
      <Box ml="20" w="70%">
        <Profile
          firstName="Brenda"
          middleName="Amadea"
          lastName="Wallace"
          email="brendaawall@gmail.com"
          group="school"
        />
      </Box>
    </Flex>
  );
};

export default IndexPage;
