import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillMessage } from "react-icons/ai";

function Message() {
    return (
        <Flex
            w="full"
            h="80vh"
            align="center"
            justify="center"
            bgColor="white"
            borderRadius="25px"
        >
            <Box textAlign="center">
                <Icon as={AiFillMessage} fontSize="5rem" />
                <Text fontSize="1.5rem">You have no messages right now!</Text>
            </Box>
        </Flex>
    );
}

export default Message;
