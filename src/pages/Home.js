import MenuList from "@/custom/MenuList";
import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Text,
    VStack
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import pasta from '@/images/dishes/pasta.jpg'

const menu = [
    {
        name: "Herb-Roasted Scallop",
        description: "Seared scallop on vegetable puree with fresh herbs.",
        price: 16.95,
        filename: "herb-roasted-scallop.jpg"
    },
    {
        name: "Mediterranean Salad",
        description: "Mixed greens, roasted peppers, olives, and feta cheese with olive oil dressing.",
        price: 12.50,
        filename: "mediterranean-salad.jpg"
    },
    {
        name: "Crispy Chicken Wings",
        description: "Golden wings glazed in spicy sauce, served with dipping sauces.",
        price: 10.00,
        filename: "crispy-chicken-wings.jpg"
    },
    {
        name: "Gourmet Mini Slider",
        description: "Mini brioche burger with melted cheese and fries.",
        price: 9.25,
        filename: "gourmet-mini-slider.jpg"
    }
]

function Home() {
    return (
        <>
            <VStack>
                <Container>
                    <Box
                        bgImage={`url(${pasta})`}
                          bgPosition="center"
                            bgRepeat="no-repeat"
                            bgSize="cover" 
                        p={6}  
                        h="400px"
                    >
                              <VStack spacing={4} align="start">

                        <Heading size="4xl">
                            Welcome to Little Mango!
                        </Heading>
                        <Text>
                            Experience vibrant flavors and warm hospitality in a cozy, modern setting. Whether it’s a special night out or a casual meal, reserve your table now to enjoy our fresh, delicious dishes crafted just for you.

                            Book your spot today — we can’t wait to serve you!
                        </Text>
                        <Link to="/reservation">
                            <Button>Reserve</Button>
                        </Link>
                        </VStack>
                    </Box>
                </Container>

                <Heading size="4xl">
                    New Dishes !
                </Heading>

                <Container>
                    <MenuList list={menu} columns="4"/>
                </Container>
            </VStack>
        </>
    );
}

export default Home;