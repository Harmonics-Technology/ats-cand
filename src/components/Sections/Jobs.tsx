import {
    Box,
    Flex,
    Table,
    TableContainer,
    Tbody,
    Thead,
    Tr,
} from "@chakra-ui/react";
import Loading from "@components/Bits/Loading";
import Pagination from "@components/Bits/Pagination";
import { TableData, TableHead, TableStatus } from "@components/Bits/Tables";
import { UserContext } from "@components/Context/UserContext";
import React, { useContext, useEffect, useState } from "react";

export const Jobs = () => {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <Flex
            w="full"
            minH="80vh"
            align="center"
            justify="center"
            // bgColor="white"
            borderRadius="25px"
            p="1rem"
        >
            <Loading loading={loading} />
            <Box w="full">
                <TableContainer>
                    <Table variant="striped">
                        <Thead>
                            <Tr bgColor="gray.600" color="white">
                                <TableHead name="S/N" />
                                {/* <TableHead name="Applicant Name" /> */}
                                <TableHead name="Job Title" />
                                <TableHead name="Chances" />
                                <TableHead name="Job Status" />
                            </Tr>
                        </Thead>
                        <Tbody>
                            {user?.applications.map((item: any, i: number) => (
                                <Tr borderBottom="1px solid" key={i}>
                                    <TableData name={++i} />
                                    {/* <TableData name={user.name} />x */}
                                    <TableData name={item.title} />
                                    <TableData
                                        name={`${item.chances || 0} chances`}
                                    />
                                    <TableStatus status={item.status} />
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Pagination data={user?.applications} />
            </Box>
        </Flex>
    );
};
