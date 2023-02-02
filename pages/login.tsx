import {
    Box,
    Button,
    Checkbox,
    Flex,
    Image,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import NextLink from "next/link";
interface LoginModel {
    email: string;
    password: string;
}
// import { OpenAPI, UserService, UserViewStandardResponse } from "src/services";
import BeatLoader from "react-spinners/BeatLoader";
import { PrimaryInput } from "@components/FormFields/PrimaryInput";

const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
});

function login() {
    const router = useRouter();
    // const { setUser } = useContext(UserContext);
    const path = Cookies.get("path") as string;
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const changeInputType = () => {
        setPasswordVisible(!passwordVisible);
    };
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<LoginModel>({
        resolver: yupResolver(schema),
        mode: "all",
    });
    const onSubmit = async (data: LoginModel) => {
        // try {
        //     const result = (await UserService.loginUser(
        //         data,
        //     )) as UserViewStandardResponse;
        //     if (result.status) {
        //         // console.log({ result });
        //         OpenAPI.TOKEN = result?.data?.token as string;
        //         toast({
        //             title: `Login Successful`,
        //             status: "success",
        //             isClosable: true,
        //             position: "top-right",
        //         });
        //         setUser(result.data);
        //         Cookies.set("user", JSON.stringify(result.data));
        //         result.data &&
        //             Cookies.set("token", result.data.token as string);
        //         if (typeof path === "string" && path.trim().length === 0) {
        //             router.push(path);
        //             return;
        //         }
        //         // router.push(
        //         //     `${result?.data?.role?.replace(' ', '')}/dashboard`,
        //         // );
        //         window.location.href = `${result?.data?.role?.replaceAll(
        //             " ",
        //             "",
        //         )}/dashboard`;
        //         return;
        //     }
        //     toast({
        //         title: result.message,
        //         status: "error",
        //         isClosable: true,
        //         position: "top-right",
        //     });
        //     return;
        // } catch (error: any) {
        //     // console.log({ error });
        //     toast({
        //         title: error?.message || error?.body?.message,
        //         status: "error",
        //         isClosable: true,
        //         position: "top-right",
        //     });
        // }
    };
    return (
        <Flex h="100vh" align="center" w="full">
            <Flex w="full" align="center" h="100%">
                <Box
                    w={["full", "80%"]}
                    mx="auto"
                    // boxShadow="0 20px 27px 0 rgb(0 0 0 / 10%)"
                    h={["full", "auto"]}
                    p="1rem 3rem 4rem"
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        w="full"
                        // bgColor="brand.100"
                        alignItems="center"
                        mb="1rem"
                        p=".5rem"
                    >
                        <Image src="/assets/logob.png" h="3rem" />
                    </Box>
                    <Text
                        fontSize="1.3rem"
                        fontWeight="bold"
                        w={["100%", "100%"]}
                        lineHeight="1"
                        textAlign="center"
                    >
                        Login into your account
                    </Text>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <VStack w="full" spacing=".7rem">
                            <PrimaryInput<LoginModel>
                                register={register}
                                name="email"
                                error={errors.email}
                                defaultValue=""
                                type="email"
                                placeholder="Chigozie"
                                label="Email Address"
                                fontSize=".8rem"
                            />
                            <PrimaryInput<LoginModel>
                                register={register}
                                name="password"
                                error={errors.password}
                                defaultValue=""
                                placeholder="*********"
                                type={passwordVisible ? "text" : "password"}
                                icon={true}
                                passwordVisible={passwordVisible}
                                changeVisibility={changeInputType}
                                label="Password"
                                fontSize=".8rem"
                            />
                            <Button
                                variant="solid"
                                type="submit"
                                isLoading={isSubmitting}
                                spinner={<BeatLoader color="white" size={10} />}
                                w="full"
                                p="1.5rem 0"
                                color="white"
                                bgColor="brand.300"
                                // mt={["2rem", "0"]}
                            >
                                Sign in
                            </Button>
                            <Flex w="full" justify="space-between">
                                <Checkbox
                                    alignItems="center"
                                    borderColor="none"
                                    borderRadius="5px"
                                    size="sm"
                                    color="gray.300"
                                    fontSize=".8rem"
                                    textTransform="capitalize"
                                >
                                    remember me.
                                </Checkbox>
                                <NextLink href="/forgot-password" passHref>
                                    <Link
                                        fontSize=".9rem"
                                        fontWeight="500"
                                        color="brand.300"
                                    >
                                        Forgot password
                                    </Link>
                                </NextLink>
                            </Flex>
                        </VStack>
                    </form>
                    <Text fontSize=".9rem" mt="2rem">
                        Not registered yet?
                        <Link href="/register" color="brand.300">
                            <Text as="span"> Create an Account</Text>
                        </Link>
                    </Text>
                </Box>
            </Flex>
            <Box w="full" h="100%" overflow="hidden">
                <Image
                    w="full"
                    h="full"
                    objectFit="cover"
                    src="/assets/signup.png"
                />
            </Box>
        </Flex>
    );
}

export default login;
