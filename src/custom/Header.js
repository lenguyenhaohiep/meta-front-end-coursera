import { Box, Button, Flex, HStack, Image, Spacer } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom";
import Home from "@/pages/Home";

import logo from '@/images/Asset 16@4x.png'

function Header() {
    const location = useLocation();
    return (
        <>
            <Box bg="gray.100" px={4} py={2} boxShadow="sm">
                <Flex align="center">

                    <Image src={logo} height="50px" />

                    <Spacer />

                    <nav>
                        <HStack spacing={10}>
                            <Link to="/">
                                <Button variant={location.pathname == "/" ? "solid" : "plain"}>Home</Button>
                            </Link>
                            <Link to="/menu">
                                <Button variant={location.pathname == "/menu" ? "solid" : "plain"}>Menu</Button>
                            </Link>
                            <Link to="/reservation">
                                <Button variant={location.pathname == "/reservation" ? "solid" : "plain"}>Reservation</Button>
                            </Link>
                            <Link to="/about">
                                <Button variant={location.pathname == "/about" ? "solid" : "plain"}>About</Button>
                            </Link>
                        </HStack>
                    </nav>
                </Flex>
            </Box>

        </>);
}

export default Header;