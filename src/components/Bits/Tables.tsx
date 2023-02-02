import { Flex, Td, Th } from "@chakra-ui/react";

export function TableHead({
    name,
    border,
    value,
    borderColor,
}: {
    name: string | number | undefined | null;
    border?: boolean | undefined;
    value?: string;
    borderColor?: string;
}) {
    return (
        <Th
            borderRight={border ? value : 0}
            borderColor={borderColor}
            borderRightColor={borderColor}
            color="inherit"
        >
            {name}
        </Th>
    );
}

export function TableData({
    name,
    border,
    value,
    borderColor,
    classes,
}: {
    name: string | number | undefined | null;
    border?: boolean | undefined;
    value?: string;
    borderColor?: string;
    classes?: any;
}) {
    return (
        <Td
            borderColor={borderColor}
            // borderRight={border ? value : 0}
            borderRightColor={borderColor}
            paddingInlineStart="1rem"
            className={classes}
            borderRight="1px solid"
            borderBottom="1px solid"
            // maxW="120px"
            // textOverflow=""
            // overflow="hidden"
            fontSize=".9rem"
            // noOfLines={1}
            color={
                name == "OFFSHORE"
                    ? "brand.700"
                    : name == "ONSHORE"
                    ? "brand.400"
                    : "black"
            }
        >
            {name}
        </Td>
    );
}
export function TableStatus({ status }: { status: string }) {
    return (
        <Td>
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
        </Td>
    );
}
