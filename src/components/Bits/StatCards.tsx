import { Box, Divider, Flex, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface statProps {
    subTitle: string | undefined;
    value: string | undefined;
    title: string | undefined;
    url?: string | undefined;
}

export const StatCards = ({ subTitle, value, title, url }: statProps) => {
    const router = useRouter();
    return (
        <Box
            bgColor="white"
            p="1rem"
            borderRadius="15px"
            cursor="pointer"
            onClick={url ? () => router.push(url || "") : void 0}
        >
            <Flex
                justify="space-between"
                align="center"
                textTransform="capitalize"
            >
                <Box>
                    <Text color="#A0AEC0" fontSize="13px" mb=".5rem">
                        {subTitle}
                    </Text>
                    <Text color="main.100" fontSize="20px" mb="0">
                        {value}
                    </Text>
                </Box>
                <Image src="/assets/avt (1).svg" />
            </Flex>
            <Divider bgColor="rgba(7, 51, 103, 0.39)" my=".5rem" />
            <Text color="#A0AEC0" fontSize="10px" mb="0">
                {title}
            </Text>
        </Box>
    );
};
