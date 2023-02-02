import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { RiQuestionLine } from "react-icons/ri";

interface statProps {
    status: string;
    chance?: string;
    help?: boolean;
}

export const StatusBox = ({ status, chance, help }: statProps) => {
    // console.log({ status });
    return (
        <HStack gap=".8rem">
            <Box>
                <Flex
                    textTransform="capitalize"
                    borderRadius="12px"
                    h="23px"
                    w="fit-content"
                    px={[".5rem", "1rem"]}
                    fontSize="10px"
                    align="center"
                    color={
                        status == "Rejected" || status == "Withdrawn"
                            ? "#AF0808"
                            : status == "In-progress"
                            ? "#AE9407"
                            : status == "Selected" || status == "Hired"
                            ? "#00A324"
                            : status == "Shortlisted"
                            ? "white"
                            : "#ffffff"
                    }
                    bgColor={
                        status == "Rejected" || status == "Withdrawn"
                            ? "brand.red"
                            : status == "In-progress"
                            ? "brand.yellow"
                            : status == "selected" || status == "Hired"
                            ? "brand.green"
                            : status == "Shortlisted"
                            ? "orange"
                            : "#000000"
                    }
                >
                    {status.toLowerCase()}
                </Flex>
                {chance && (
                    <>
                        <Text
                            fontSize="9.76px"
                            textTransform="capitalize"
                            color="brand.200"
                            textAlign="center"
                            mt=".4rem"
                        >
                            {chance} chances
                        </Text>
                    </>
                )}
            </Box>
            <Box>
                {help ? (
                    <>
                        <Icon as={RiQuestionLine} color="#AF0808" />
                    </>
                ) : (
                    <Icon as={RiQuestionLine} color="transparent" />
                )}
            </Box>
        </HStack>
    );
};
