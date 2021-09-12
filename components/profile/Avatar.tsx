import { Box, Text } from "@chakra-ui/react";

interface AvatarProps {
  name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <Box bgColor="#dedede" borderRadius="100%" p={4}>
      <Text variant="avatar" width="fit-content">
        {name}
      </Text>
    </Box>
  );
};
