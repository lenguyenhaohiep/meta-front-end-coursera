import { Box, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react"

import logo from '@/images/Asset 18@4x.png'


function Footer() {
    return (
        <Box bg="gray.100" px={4} py={2} boxShadow="sm">
            <Flex align="center">
                <Image src={logo} height="100px" />
                <Spacer />
                <nav>
                    <HStack spacing={10}>
                        <Text> Copyright Little Lemon</Text>
                    </HStack>
                </nav>
            </Flex>
        </Box>
    )
}

export default Footer;