import MenuList from "@/custom/MenuList";
import { Heading, VStack } from "@chakra-ui/react";

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
  },
  {
    name: "Grilled Steak with Herb Butter",
    description: "Medium-rare sliced steak with herb butter and roasted vegetables.",
    price: 22.00,
    filename: "grilled-steak-with-herb-butter.jpg"
  },
  {
    name: "Pesto Pasta",
    description: "Pasta tossed in creamy basil pesto with cherry tomatoes and Parmesan.",
    price: 14.75,
    filename: "pesto-pasta.jpg"
  },
  {
    name: "Caprese Platter",
    description: "Tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
    price: 11.00,
    filename: "caprese-platter.jpg"
  },
  {
    name: "Rainbow Buddha Bowl",
    description: "Grains, roasted veggies, avocado, and seeds in a balanced bowl.",
    price: 13.50,
    filename: "rainbow-buddha-bowl.jpg"
  },
  {
    name: "Lemon Tart",
    description: "Pastry shell with lemon curd, topped with berries and mint.",
    price: 7.00,
    filename: "lemon-tart.jpg"
  },
  {
    name: "Artisan Cheese Board",
    description: "A selection of cheeses, cured meats, fruit, and crostini.",
    price: 18.00,
    filename: "artisan-cheese-board.jpg"
  }
];

function MenuPage() {
    return (
        <>
            <VStack>
                <Heading size="4xl">
                    Our Menu
                </Heading>
                <MenuList list={menu} columns="3"/>
            </VStack>
        </>
    );
}

export default MenuPage;