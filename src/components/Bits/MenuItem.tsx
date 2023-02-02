import { Box, HStack, Square, Text } from "@chakra-ui/react";
import { UserContext } from "@components/Context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

interface menuProps {
    linkName: string;
    icon: any;
    menuTitle: string;
    setOpenSidenav: (value: boolean) => void;
}

export const MenuItem = ({
    linkName,
    icon,
    menuTitle,
    setOpenSidenav,
}: menuProps) => {
    const router = useRouter();
    const { user } = useContext(UserContext);
    const url = `/${linkName}`;
    return (
        <Link href={`${url}?id=${user?.id}`} passHref>
            <Box
                overflow="hidden"
                cursor="pointer"
                onClick={() => setOpenSidenav(false)}
            >
                <HStack
                    bgColor={
                        router.pathname.startsWith(url) ? "white" : "brand.100"
                    }
                    align="center"
                    px="1rem"
                    borderRadius="15px"
                    h="3rem"
                >
                    <Square
                        color={
                            router.pathname.startsWith(url)
                                ? "brand.100"
                                : "white"
                        }
                        borderRadius="8px"
                        size="2rem"
                        fontSize=".9rem"
                    >
                        {icon}
                    </Square>
                    <Text
                        color={
                            router.pathname.startsWith(url)
                                ? "brand.100"
                                : "white"
                        }
                        fontWeight={
                            router.pathname.startsWith(url) ? "600" : "500"
                        }
                        fontSize=".9rem"
                        pl=".5rem"
                        noOfLines={1}
                    >
                        {menuTitle}
                    </Text>
                    <Text display="none">{linkName}</Text>
                </HStack>
            </Box>
        </Link>
    );
};
