import { Flex, HStack, Text, Box, Button } from "@chakra-ui/react";
import React from "react";

interface appProps {
    meetTitle: string;
    meetDate: string;
    meetTime: string;
}

export const MeetingItem = ({ meetTitle, meetDate, meetTime }: appProps) => {
    return (
        <Flex
            borderTop="2px solid"
            borderColor="gray.200"
            justify="space-between"
            align="center"
            minH="72px"
            w="full"
        >
            <HStack>
                <Box>
                    <Text fontSize="12px" fontWeight="600" mb=".1rem">
                        {meetTitle}
                    </Text>
                    <Text fontSize="10px" mb=".2rem">
                        {meetDate}
                    </Text>
                    <Text fontSize="10px" mb=".1rem">
                        ({meetTime})
                    </Text>
                </Box>
            </HStack>
            <HStack>
                <Button
                    fontSize="9.35px"
                    bgColor="brand.200"
                    color="white"
                    h="2rem"
                >
                    Join Meeting
                </Button>
            </HStack>
        </Flex>
    );
};
