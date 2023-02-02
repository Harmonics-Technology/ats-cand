import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { BeatLoader } from "react-spinners";

function Loading({ loading }: { loading: boolean }) {
    return (
        <Flex
            pos="absolute"
            w="100%"
            h="100vh"
            bgColor="rgb(206,207,213,.95)"
            justify="center"
            align="center"
            left="0"
            top="0"
            zIndex="988"
            pointerEvents="none"
            display={loading ? "flex" : "none"}
        >
            <BeatLoader size={20} color="rgba(7, 51, 103, 1)" />
        </Flex>
    );
}

export default Loading;
