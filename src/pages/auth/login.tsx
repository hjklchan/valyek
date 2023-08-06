import {
    Flex,
    Stack,
    Avatar,
    Heading,
    Box,
    FormControl,
    InputGroup,
    Input,
    Button,
    FormHelperText,
    Link,
    HStack,
    useToast,
} from "@chakra-ui/react";
import { signInApi } from "@/api/auth/auth";
import { useAppDispatch } from "@/store"
import { useRef, useState } from "react";
import { SignInRequest } from "@/api/auth";
import { setToken } from "@/utils/tokenx";
import { useDispatch } from "react-redux";



const Login = () => {
    const toast = useToast();
    const [loginLoading, setLoginLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const dispatch = useDispatch();
    const doLogin = async () => {
        const data = { email, password } as SignInRequest;
        try {
            setLoginLoading(true);
            const result = await signInApi(data);
            setLoginLoading(false);
            setToken(result.data.accessToken);
            dis
            toast({
                title: "Login Successful",
                duration: 5000,
                status: "success",
            })
        } catch (error) {
            setLoginLoading(false);
        }
    };
    const doRegistration = () => {
        console.log("click registration button");
    };

    return <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
    >
        <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
        >
            <Avatar bg="teal.500" />
            <Heading color="teal.400">Valye</Heading>
            <Box minW={{ base: "90%", md: "368px" }}>
                <form>
                    <Stack
                        spacing={4}
                        p="1.5rem"
                        backgroundColor="whiteAlpha.900"
                        boxShadow="md"
                    >
                        <FormControl>
                            <InputGroup>
                                {/*<InputLeftElement pointerEvents="none">*/}
                                <Input type="email" onChange={e => onEmailChange(e)} placeholder="Email" />
                                {/*</InputLeftElement pointerEvents="none">*/}
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <InputGroup>
                                {/*<InputLeftElement pointerEvents="none">*/}
                                <Input type="password" onChange={e => onPasswordChange(e)} placeholder="Password" />
                                {/*</InputLeftElement pointerEvents="none">*/}
                            </InputGroup>
                            <FormHelperText textAlign="right">
                                <Link>forgot password</Link>
                            </FormHelperText>
                        </FormControl>
                        <HStack>
                            <Button
                                borderRadius={0}
                                type="button"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                isLoading={loginLoading}
                                onClick={() => doLogin()}
                            >
                                Login
                            </Button>
                            <Button
                                borderRadius={0}
                                type="button"
                                variant="solid"
                                colorScheme="blue"
                                width="full"
                                onClick={() => doRegistration()}
                            >
                                Registration
                            </Button>
                        </HStack>
                    </Stack>
                </form>
            </Box>
        </Stack>
    </Flex>
}

export default Login;
