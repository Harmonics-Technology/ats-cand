import { Flex, HStack, Square, Image, Text, Box } from "@chakra-ui/react";
import React from "react";
import { StatusBox } from "./StatusBox";

interface appProps {
    jobTitle: string;
    jobNature: string;
    jobLocation: string;
    imageUrl: string;
    status: string;
    chance?: any;
    help?: boolean;
}

export const ApplicationItem = ({
    jobTitle,
    jobNature,
    jobLocation,
    imageUrl,
    status,
    chance,
    help,
}: appProps) => {
    return (
        <Flex
            bgColor="rgba(247, 248, 248, 1)"
            boxShadow="sm"
            borderRadius="16px"
            justify="space-between"
            align="center"
            minH="72px"
            px="1rem"
            w="full"
        >
            <HStack>
                <Square
                    size="3rem"
                    borderRadius="13px"
                    boxShadow="md"
                    overflow="hidden"
                    p=".3rem"
                >
                    <Image src={imageUrl} w="90%" h="90%" objectFit="cover" />
                </Square>
                <Box>
                    <Text
                        fontSize="13px"
                        fontWeight="600"
                        mb=".1rem"
                        noOfLines={1}
                    >
                        {jobTitle}
                    </Text>
                    <Text fontSize="12px" mb=".1rem" noOfLines={1}>
                        {jobNature}
                    </Text>
                    <Text fontSize="12px" mb=".1rem" noOfLines={1}>
                        {jobLocation}
                    </Text>
                </Box>
            </HStack>
            <HStack>
                <StatusBox status={status} chance={chance} help={help} />
            </HStack>
        </Flex>
    );
};
