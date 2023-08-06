import { Box, Flex, IconButton, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function() {
    const { isOpen, onToggle } = useDisclosure();
    return <Box>
        <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'50px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            align={"center"}
        >
            <Flex
                flex={{ base: 1, md: "auto" }}
                ml={{ base: -2 }}
                display={{ base: "flex", md: 'none' }}
            >
                <IconButton
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon h={3} w={3} />}
                    variant={"ghost"}
                    aria-label={"Toggle Navigation"}
                />
            </Flex>
            <Flex display={{base: "none", md: "flex"}} ml={1}>
            hello
            </Flex>
        </Flex>
    </Box>
}
