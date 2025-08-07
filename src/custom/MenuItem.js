
import { Badge, Box, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { HiStar } from "react-icons/hi";

const MenuItem = ({title, description, filename, price }) => {
    const imageSrc = useMemo(() => {
        try {
            return require(`@/images/dishes/${filename}`);
        } catch {
            return null;
        }
    }, [filename]);

    return (
        <Box maxW="sm" borderWidth="1px">
            <Image src={imageSrc} alt={filename} maxH="200px"
                w="100%"
                h="100%"
                objectFit="cover"
            />

            <Box p="4" spaceY="2">
                <HStack>
                    <HStack gap="1" fontWeight="medium">
                        <Icon color="orange.400">
                            <HiStar />
                        </Icon>
                        <Text>
                            {title}
                        </Text>
                    </HStack>
                </HStack>
                <Text fontWeight="medium" color="fg">
                    {description}
                </Text>
                <HStack color="fg.muted">
                    {price} $
                </HStack>
            </Box>
        </Box>
    )

};

export default MenuItem;