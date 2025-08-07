import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

function Layout() {
    return (
        <>
            <Flex direction="column" minH="100vh">
                <Box>
                    <header>
                        <Header />
                    </header>
                </Box>

                <Container flex="1" maxW="container.md" py={6}>
                    <main>
                        <Outlet />
                    </main>
                </Container>

                <Box>
                    <footer>
                        <Footer />
                    </footer>
                </Box>
            </Flex>
        </>
    );
}

export default Layout;