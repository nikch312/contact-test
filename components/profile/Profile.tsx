import React from "react";

import { Box, Button, Flex, Text, HStack } from "@chakra-ui/react";

import { Avatar } from "./Avatar";

interface ProfileProps {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  group: string;
}

export const Profile: React.FC<ProfileProps> = ({
  firstName,
  middleName = "",
  lastName,
  email,
  group,
}) => {
  return (
    <Flex flexDir="column" justifyContent="space-between" h="100%">
      <HStack spacing={10} alignItems="flex-start">
        <Avatar name={firstName[0] + lastName[0]} />
        <Box>
          <Box>
            <Text variant="title">{firstName}</Text>
            <Text variant="title">{middleName}</Text>
            <Text variant="title">{lastName}</Text>
          </Box>
          <Box mt="20">
            <Flex>
              <Text w="20" fontWeight="700">
                Email
              </Text>
              <Text>{email}</Text>
            </Flex>
            <Flex mt="4">
              <Text w="20" fontWeight="700">
                Group
              </Text>
              <Text>{group}</Text>
            </Flex>
          </Box>
        </Box>
      </HStack>
      <Flex justifyContent="space-between">
        <Box>
          <Button>Share</Button>
          <Button ml={4}>Edit...</Button>
        </Box>
        <Button>Delete</Button>
      </Flex>
    </Flex>
  );
};
