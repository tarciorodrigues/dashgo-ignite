import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Tarcio Rodrigues</Text>
          <Text color="gray.300" fontSize="small">
            rodriguestarcio.adv@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Tarcio Rodrigues"
        src="https://github.com/tarciorodrigues.png"
      />
    </Flex>
  );
}
