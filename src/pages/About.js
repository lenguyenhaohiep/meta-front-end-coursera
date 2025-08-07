import { Heading, Text, VStack } from "@chakra-ui/react";

function About() {
    return (
        <>
            <VStack>
                <Heading size="4xl">
                    Our History
                </Heading>
                <Text>
                    Nestled in the heart of the city, Little Lemon began as a humble neighborhood eatery with a bold vision — to bring the warmth and vibrant flavors of Mediterranean cuisine to a modern dining experience.
                    Founded in 2015 by two passionate brothers, Little Lemon was inspired by the family’s roots in southern Italy, where food is a celebration of life, love, and community. What started as a small corner café serving hand-rolled pasta and fresh lemon-infused dishes soon became a local favorite.
                    Over the years, Little Lemon has grown — but our philosophy has remained the same: simple, honest ingredients prepared with heart. We work closely with local farmers and artisans to ensure every dish bursts with seasonal freshness and bold Mediterranean flair.
                    From our signature lemon herb chicken to our homemade olive oil cakes, every plate tells a story of tradition, quality, and care.
                    Today, Little Lemon continues to bring people together around the table — just like our family has done for generations.
                </Text>
                <Heading size="4xl">
                    Opening hours
                </Heading>
                <Text>
                    Monday: Closed
                    Tuesday: 11:00 AM – 9:00 PM
                    Wednesday: 11:00 AM – 9:00 PM
                    Thursday: 11:00 AM – 9:00 PM
                    Friday: 11:00 AM – 10:00 PM
                    Saturday: 12:00 PM – 10:00 PM
                    Sunday: 12:00 PM – 8:00 PM

                    Kitchen closes 30 minutes before closing time.
                </Text>
            </VStack>
        </>
    );
}

export default About;