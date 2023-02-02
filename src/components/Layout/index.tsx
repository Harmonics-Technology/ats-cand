import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import { SideBar } from "./SideBar";
import { TopNav } from "./TopNav";

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    const router = useRouter();
    const noSideBar =
        router.pathname.startsWith("/login") ||
        router.pathname.startsWith("/password") ||
        router.pathname.startsWith("/forgot-password");
    const [openSidenav, setOpenSidenav] = useState(false);
    return (
        <>
            {!noSideBar ? (
                <Flex pos="relative">
                    <SideBar
                        openSidenav={openSidenav}
                        setOpenSidenav={setOpenSidenav}
                    />
                    <Box
                        w={["full", "83%"]}
                        ml="auto"
                        as="main"
                        minH="95vh"
                        bgColor="#f5f6f8"
                    >
                        <TopNav
                            setOpenSidenav={setOpenSidenav}
                            openSidenav={openSidenav}
                        />
                        <Box mt="1rem" w="95%" mx="auto" mb="3rem">
                            {children}
                        </Box>
                    </Box>
                </Flex>
            ) : (
                <Box>{children}</Box>
            )}
        </>
    );
}

export default Layout;
