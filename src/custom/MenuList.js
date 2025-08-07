import { HStack, SimpleGrid } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

import logo from '@/images/Asset 18@4x.png'


function MenuList({ list, ...props }) {
    return (
        <SimpleGrid columns={[1, 2, 3, props.columns]} gap={4}>
            {
                list.map(item => {
                    return (<MenuItem key={item.filename} title={item.name} description={item.description} filename={item.filename} price={item.price}/>);
                })
            }
        </SimpleGrid>
    );
}

export default MenuList;