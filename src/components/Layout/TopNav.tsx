import {
    Box,
    Circle,
    Flex,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
} from "@chakra-ui/react";
import { UserContext } from "@components/Context/UserContext";
import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TfiClose, TfiMenu } from "react-icons/tfi";

interface topnavProps {
    setOpenSidenav: any;
    openSidenav: boolean;
}

export const TopNav = ({ setOpenSidenav, openSidenav }: topnavProps) => {
    const { user } = useContext(UserContext);
    return (
        <Flex
            justify="space-between"
            h="4rem"
            bgColor="white"
            px="2rem"
            pos="sticky"
            top="0"
            mb="2rem"
            align="center"
        >
            <Box w="40%">
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<BiSearch color="#90A0B7" />}
                    />
                    <Input
                        placeholder="Global search"
                        color="#90A0B7"
                        outline="0"
                        border="0"
                        h="2.5rem"
                        fontSize=".7rem"
                    />
                </InputGroup>
            </Box>
            <HStack>
                <Box pos="relative">
                    <Icon
                        as={IoMdNotificationsOutline}
                        color="rgba(194, 207, 224, 1)"
                    />
                    <Circle
                        bgColor={"brand.red"}
                        size=".6rem"
                        // display={messageCount <= 0 ? "none" : "flex"}
                        fontSize=".5rem"
                        color="white"
                        fontWeight="bold"
                        pos="absolute"
                        justifyContent="center"
                        top="0%"
                        right="-10%"
                        border="1px solid white"
                    >
                        {/* {messageCount} */}
                    </Circle>
                </Box>
                <Circle
                    size="2rem"
                    overflow="hidden"
                    bgColor="brand.100"
                    fontWeight="bold"
                    color="white"
                >
                    {user?.name?.split(" ").map((x: string) => x.charAt(0))}
                </Circle>
                <HStack gap="0" spacing="0">
                    <Text
                        color="#8C8C8C"
                        fontSize="12px"
                        fontWeight="500"
                        noOfLines={1}
                        mb="0"
                        display={["none", "block"]}
                    >
                        {user?.name}
                    </Text>
                    <Box
                        cursor="pointer"
                        display={["block", "none"]}
                        onClick={() => setOpenSidenav(!openSidenav)}
                    >
                        {openSidenav ? <TfiClose /> : <TfiMenu />}
                    </Box>
                </HStack>
            </HStack>
        </Flex>
    );
};
