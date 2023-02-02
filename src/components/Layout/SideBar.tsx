import { Box, HStack, Divider, Image, VStack } from "@chakra-ui/react";
import { MenuItem } from "@components/Bits/MenuItem";
import Link from "next/link";
import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { BiBriefcase } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

interface sidenavProps {
    openSidenav: boolean;
    setOpenSidenav: any;
}

export const SideBar = ({ openSidenav, setOpenSidenav }: sidenavProps) => {
    return (
        <Box
            bgColor="brand.100"
            h="100vh"
            w={["50%", "17%"]}
            pos="fixed"
            pl="1rem"
            transition="left .3s ease-out"
            pt="2rem"
            zIndex="985"
            overflowY="auto"
            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
            left={[openSidenav ? "0%" : "-50%", "unset"]}
        >
            <Link href="/" passHref>
                <HStack>
                    <Box h="3rem">
                        <Image src="/assets/logo.png" h="full" />
                    </Box>
                </HStack>
            </Link>
            <Divider my="2rem" />
            <VStack align="left" gap=".5rem" pr="1rem">
                <MenuItem
                    linkName="dashboard"
                    menuTitle="Dashboard"
                    icon={<RiDashboardLine />}
                    setOpenSidenav={setOpenSidenav}
                />
                <MenuItem
                    linkName="jobs"
                    menuTitle="My Jobs"
                    icon={<BiBriefcase />}
                    setOpenSidenav={setOpenSidenav}
                />
                <MenuItem
                    linkName="messages"
                    menuTitle="Messages"
                    icon={<AiOutlineMail />}
                    setOpenSidenav={setOpenSidenav}
                />
            </VStack>
        </Box>
    );
};
