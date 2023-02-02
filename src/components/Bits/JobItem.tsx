import {
    Flex,
    HStack,
    Square,
    Image,
    Text,
    Box,
    Circle,
    Button,
    Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface appProps {
    jobTitle: string;
    jobNature: string;
    jobLocation: string;
    imageUrl: string;
    applicant: string | number;
    jobUrl?: string;
}

export const JobItem = ({
    jobTitle,
    jobNature,
    jobLocation,
    imageUrl,
    applicant,
    jobUrl,
}: appProps) => {
    return (
        <Box w="full">
            <Divider
                h=".3rem"
                bgColor="gray.300"
                my=".5rem"
                borderRadius="20px"
            />
            <Flex
                justify="space-between"
                align="center"
                minH="72px"
                px="1rem"
                w="full"
                pos="relative"
                flexDir={["column", "row"]}
            >
                <HStack color="black">
                    <Square
                        size="3rem"
                        borderRadius="13px"
                        boxShadow="md"
                        overflow="hidden"
                        p=".3rem"
                    >
                        <Image
                            src={imageUrl}
                            w="90%"
                            h="90%"
                            objectFit="cover"
                        />
                    </Square>
                    <Box>
                        <Text fontSize="16px" fontWeight="500" mb=".1rem">
                            {jobTitle}
                        </Text>
                        <Text fontSize="11.67px" mb=".1rem" fontWeight="400">
                            {jobNature}
                        </Text>
                        <HStack gap=".5rem" align="center">
                            <Text fontSize="11.67px" mb="0rem" fontWeight="400">
                                {jobLocation}
                            </Text>
                            <HStack align="center">
                                <Circle
                                    bgColor={
                                        applicant >= 100
                                            ? "red"
                                            : "rgba(44, 195, 105, 1)"
                                    }
                                    size="8.7px"
                                />
                                <Text
                                    mb="0"
                                    fontSize="11.67px"
                                    fontWeight="600"
                                    color={
                                        applicant >= 100
                                            ? "red"
                                            : "rgba(44, 195, 105, 1)"
                                    }
                                >
                                    {applicant} Applicants
                                </Text>
                            </HStack>
                        </HStack>
                    </Box>
                </HStack>
                <HStack
                    mr={["0", "4rem"]}
                    w={["full", "fit-content"]}
                    pt={[".5rem", "0"]}
                >
                    <Link href={jobUrl || ""} passHref>
                        <Button
                            variant="outline"
                            h="38px"
                            color="rgba(44, 195, 105, 1)"
                            borderColor="rgba(44, 195, 105, 1)"
                            fontWeight="400"
                            fontSize="12px"
                            borderRadius="30px"
                            boxShadow="md"
                            px="1.5rem"
                            w={["full", "fit-content"]}
                        >
                            Apply Now
                        </Button>
                    </Link>
                </HStack>
                <Image
                    src="/assets/Vector.png"
                    w="11.17px"
                    h="17.27px"
                    pos="absolute"
                    right="0"
                    top="0"
                />
            </Flex>
        </Box>
    );
};
