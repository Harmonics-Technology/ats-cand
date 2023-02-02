import {
    Box,
    HStack,
    Icon,
    Text,
    Image,
    Grid,
    Flex,
    VStack,
    Circle,
} from "@chakra-ui/react";
import { ApplicationItem } from "@components/Bits/ApplicationItem";
import { JobItem } from "@components/Bits/JobItem";
import Loading from "@components/Bits/Loading";
import { MeetingItem } from "@components/Bits/MeetingItem";
import { StatCards } from "@components/Bits/StatCards";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

interface dashProps {
    user: any;
}

export const Dashboard = ({ user }: dashProps) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <Box>
            <Loading loading={loading} />
            <HStack align="center" mb="2rem" justify={["center", "flex-start"]}>
                <Image src="/assets/avt (2).png" />
                <Text mb="0">Hello {user?.name}</Text>
            </HStack>
            <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
                gap="1rem"
                mb="2rem"
            >
                <StatCards
                    subTitle="my jobs"
                    value={user?.myJobs}
                    title="Total Number Of Jobs Applied"
                    url={`/jobs?id=${user?.id}`}
                />
                <StatCards
                    subTitle="rejected jobs"
                    value={user?.rejectedJobs}
                    title="Total Number Of Rejected Jobs"
                />
                <StatCards
                    subTitle="Shortlisted Jobs"
                    value={user?.ShortlistedJobs}
                    title="Number of Jobs Currently Shortlisted"
                />
                <StatCards
                    subTitle="interviews"
                    value={user?.interviews}
                    title="Total Number Of Interviews Attended"
                />
            </Grid>
            <Grid
                templateColumns={["1fr", "2fr 1fr"]}
                gap="2rem"
                mb="1rem"
                w="full"
            >
                <Box borderRadius="22px" bgColor="white" p="1rem">
                    <Flex justify="space-between" align="center" mb="2rem">
                        <Text color="black" mb="0">
                            Applications
                        </Text>
                        <Link href={`/jobs?id=${user?.id}`} passHref>
                            <Text
                                cursor="pointer"
                                color="brand.200"
                                fontSize="12px"
                                mb="0"
                            >
                                See all
                            </Text>
                        </Link>
                    </Flex>
                    <VStack>
                        {user?.applications?.slice(0, 4).map((item: any) => (
                            <ApplicationItem
                                key={item.id}
                                jobTitle={item.title}
                                jobNature={"Techmint , On-site"}
                                jobLocation={"Bengaluru, India"}
                                imageUrl={item.logo}
                                status={item.status}
                                help={item.status == "REJECTED" ? true : false}
                                chance={item.chances}
                            />
                        ))}
                    </VStack>
                </Box>
                <Box
                    borderRadius="15px"
                    bgColor="white"
                    p="1rem"
                    pos="relative"
                >
                    <HStack
                        w="80%"
                        h="fit-content"
                        mx="auto"
                        overflow="hidden"
                        borderRadius="30px"
                        align="flex-start"
                        mb="2rem"
                    >
                        <Box w="100%" h="131px">
                            <Image
                                src="/assets/avt (3).png"
                                w="full"
                                h="full"
                                objectFit="cover"
                            />
                        </Box>
                    </HStack>
                    <Icon
                        as={HiDotsVertical}
                        pos="absolute"
                        right="3%"
                        top="5%"
                    />
                    <Flex justify="space-between" align="center" mb="1rem">
                        <Text color="black" mb="0" fontSize="14px">
                            Suggested Sessions
                        </Text>
                        <Link href="/" passHref>
                            <Text
                                cursor="pointer"
                                color="brand.200"
                                fontSize="10.8px"
                                mb="0"
                            >
                                See all
                            </Text>
                        </Link>
                    </Flex>
                    <VStack>
                        {user?.sessions?.slice(0, 2).map((x: any) => (
                            <MeetingItem
                                key={x.id}
                                meetTitle={x.title}
                                meetDate={x.date}
                                meetTime={x.time}
                            />
                        ))}
                    </VStack>
                </Box>
            </Grid>
            <Grid
                templateColumns={["1fr", "2fr 1fr"]}
                gap="2rem"
                mb="1rem"
                w="full"
            >
                <Box borderRadius="22px" bgColor="white" p="1rem">
                    <Flex justify="space-between" align="center" mb="1rem">
                        <Text color="black" mb="0">
                            Jobs Recommendations for You
                        </Text>
                        <Link href="/" passHref>
                            <Text
                                cursor="pointer"
                                color="brand.200"
                                fontSize="12px"
                                mb="0"
                            >
                                See all
                            </Text>
                        </Link>
                    </Flex>
                    <Flex gap="1rem" mb="1rem">
                        {user?.applications?.slice(0, 2).map((x: any) => (
                            <HStack align="center" gap=".5rem">
                                <Circle bgColor="brand.100" size="12px" />
                                <Text mb="0" fontSize="13px" fontWeight="400">
                                    {x.title}
                                </Text>
                            </HStack>
                        ))}
                    </Flex>
                    <VStack>
                        {user?.recommendedJobs?.slice(0, 4).map((job: any) => (
                            <JobItem
                                jobTitle={job.title}
                                jobNature={job.address}
                                jobLocation={job.time}
                                imageUrl={job.logo}
                                applicant={job.applicants}
                                jobUrl={"/"}
                            />
                        ))}
                    </VStack>
                </Box>
                <Box
                    borderRadius="15px"
                    bgColor="white"
                    p="1rem"
                    pos="relative"
                >
                    <Icon
                        as={HiDotsVertical}
                        pos="absolute"
                        right="3%"
                        top="5%"
                    />
                </Box>
            </Grid>
        </Box>
    );
};
