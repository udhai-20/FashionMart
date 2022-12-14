import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
const data = [
  {
    image: "https://cdn.modesens.com/product/19040387_14",
    title: "DIOR",
    title_url:
      "https://modesens.com/product/dior-capture-youth-age-delay-advanced-creme-17-oz-50-ml-beige-19040387/",
    details: "Capture Youth Age-delay Advanced Crème 1.7 oz/ 50 ml In Beige",
    details_url:
      "https://modesens.com/product/dior-capture-youth-age-delay-advanced-creme-17-oz-50-ml-beige-19040387/",
    offers: "$85 (11% OFF)",
    offers_url:
      "https://modesens.com/product/dior-capture-youth-age-delay-advanced-creme-17-oz-50-ml-beige-19040387/",
    price: 102,
    quantity: 1,
    price_url:
      "https://modesens.com/product/dior-capture-youth-age-delay-advanced-creme-17-oz-50-ml-beige-19040387/",
    compare: "Compare 7 stores",
    compare_url:
      "https://modesens.com/product/dior-capture-youth-age-delay-advanced-creme-17-oz-50-ml-beige-19040387/",
  },
  {
    image: "https://cdn.modesens.com/product/8902724_31?w=400",
    title: "DIOR",
    title_url:
      "https://modesens.com/product/dior-miss-dior-blooming-bouquet-christian-dior-edt-spray-34-oz-100-ml-w-white-8902724/",
    details:
      "Miss Blooming Bouquet / Christian Edt Spray 3.4 oz (100 Ml) (w) In White",
    details_url:
      "https://modesens.com/product/dior-miss-dior-blooming-bouquet-christian-dior-edt-spray-34-oz-100-ml-w-white-8902724/",
    price: 134,
    quantity: 1,
    price_url:
      "https://modesens.com/product/dior-miss-dior-blooming-bouquet-christian-dior-edt-spray-34-oz-100-ml-w-white-8902724/",
    compare: "Compare 7 stores",
    compare_url:
      "https://modesens.com/product/dior-miss-dior-blooming-bouquet-christian-dior-edt-spray-34-oz-100-ml-w-white-8902724/",
  },
  {
    image: "https://cdn.modesens.com/product/6936537_26?w=400",
    title: "HOURGLASS",
    title_url:
      "https://modesens.com/product/hourglass-ambient-lighting-palette-volume-i-assorted-6936537/",
    details: "Ambient® Lighting Palette Volume I In Assorted",
    details_url:
      "https://modesens.com/product/hourglass-ambient-lighting-palette-volume-i-assorted-6936537/",
    price: 78,
    quantity: 1,
    price_url:
      "https://modesens.com/product/hourglass-ambient-lighting-palette-volume-i-assorted-6936537/",
    compare: "Compare 7 stores",
    compare_url:
      "https://modesens.com/product/hourglass-ambient-lighting-palette-volume-i-assorted-6936537/",
  },
  {
    image: "https://cdn.modesens.com/product/27694947_13?w=400",
    title: "HOURGLASS",
    title_url:
      "https://modesens.com/product/hourglass-equilibrium-and-trade-restoring-essence-4-oz-120-ml-multi-27694947/",
    details: "Equilibrium&trade; Restoring Essence 4 oz/ 120 ml In Multi",
    details_url:
      "https://modesens.com/product/hourglass-equilibrium-and-trade-restoring-essence-4-oz-120-ml-multi-27694947/",
    price: 82,
    quantity: 1,
    price_url:
      "https://modesens.com/product/hourglass-equilibrium-and-trade-restoring-essence-4-oz-120-ml-multi-27694947/",
    compare: "Compare 7 stores",
    compare_url:
      "https://modesens.com/product/hourglass-equilibrium-and-trade-restoring-essence-4-oz-120-ml-multi-27694947/",
  },
  {
    image: "https://cdn.modesens.com/product/27694951_11?w=400",
    title: "HOURGLASS",
    title_url:
      "https://modesens.com/product/hourglass-equilibrium-and-trade-rebalancing-cream-cleanser-37-oz-110-ml-na-27694951/",
    details:
      "Equilibrium&trade; Rebalancing Cream Cleanser 3.7 oz/ 110 ml In Na",
    details_url:
      "https://modesens.com/product/hourglass-equilibrium-and-trade-rebalancing-cream-cleanser-37-oz-110-ml-na-27694951/",
    price: 55,
    quantity: 1,
    price_url:
      "https://modesens.com/product/hourglass-equilibrium-and-trade-rebalancing-cream-cleanser-37-oz-110-ml-na-27694951/",
    compare: "Compare 7 stores",
    compare_url:
      "https://modesens.com/product/hourglass-equilibrium-and-trade-rebalancing-cream-cleanser-37-oz-110-ml-na-27694951/",
  },
  {
    image: "https://cdn.modesens.com/product/6677544_45?w=400",
    title: "TOM FORD",
    title_url:
      "https://modesens.com/product/tom-ford-private-blend-jasmin-rouge-eau-de-parfum-17-oz-black-6677544/",
    details: "Private Blend 'jasmin Rouge' Eau De Parfum, 1.7 oz In Black",
    details_url:
      "https://modesens.com/product/tom-ford-private-blend-jasmin-rouge-eau-de-parfum-17-oz-black-6677544/",
    price: 285,
    quantity: 1,
    price_url:
      "https://modesens.com/product/tom-ford-private-blend-jasmin-rouge-eau-de-parfum-17-oz-black-6677544/",
    compare: "Compare 7 stores",
    compare_url:
      "https://modesens.com/product/tom-ford-private-blend-jasmin-rouge-eau-de-parfum-17-oz-black-6677544/",
  },
  {
    image: "https://cdn.modesens.com/product/10299537_53?w=400",
    title: "TOM FORD",
    title_url:
      "https://modesens.com/product/tom-ford-ombre-leather-eau-de-parfum-33-oz-100-ml-eau-de-parfum-spray-na-10299537/",
    details:
      "Ombré Leather Eau De Parfum 3.3 oz/ 100 ml Eau De Parfum Spray In N,a",
    details_url:
      "https://modesens.com/product/tom-ford-ombre-leather-eau-de-parfum-33-oz-100-ml-eau-de-parfum-spray-na-10299537/",
    price: 210,
    quantity: 1,
    price_url:
      "https://modesens.com/product/tom-ford-ombre-leather-eau-de-parfum-33-oz-100-ml-eau-de-parfum-spray-na-10299537/",
    compare: "Compare 7 stores",
    compare_url:
      "https://modesens.com/product/tom-ford-ombre-leather-eau-de-parfum-33-oz-100-ml-eau-de-parfum-spray-na-10299537/",
  },
  {
    image: "https://cdn.modesens.com/product/11088692_28?w=400",
    title: "DR. BARBARA STURM",
    title_url:
      "https://modesens.com/product/dr-barbara-sturm-brightening-face-lotion-50ml-colorless-11088692/",
    details: "Brightening Face Lotion, 50ml In Colorless",
    details_url:
      "https://modesens.com/product/dr-barbara-sturm-brightening-face-lotion-50ml-colorless-11088692/",
    price: 205,
    quantity: 1,
    price_url:
      "https://modesens.com/product/dr-barbara-sturm-brightening-face-lotion-50ml-colorless-11088692/",
    compare: "Compare 6 stores",
    compare_url:
      "https://modesens.com/product/dr-barbara-sturm-brightening-face-lotion-50ml-colorless-11088692/",
  },
  {
    image: "https://cdn.modesens.com/availability/56476871?w=400",
    title: "OFF-WHITE",
    title_url:
      "https://modesens.com/product/off-white-black-wool-blend-jacket-black-off-white-uomo-48-56099830/",
    details: "Black Wool Blend Jacket Black Off White Uomo 48",
    details_url:
      "https://modesens.com/product/off-white-black-wool-blend-jacket-black-off-white-uomo-48-56099830/",
    offters: "$1429 (35% OFF)",
    offters_url:
      "https://modesens.com/product/off-white-black-wool-blend-jacket-black-off-white-uomo-48-56099830/",
    price: 3335,
    quantity: 1,
    price_url:
      "https://modesens.com/product/off-white-black-wool-blend-jacket-black-off-white-uomo-48-56099830/",
    compare: "Compare 27 stores",
    compare_url:
      "https://modesens.com/product/off-white-black-wool-blend-jacket-black-off-white-uomo-48-56099830/",
  },
  {
    image: "https://cdn.modesens.com/product/54871684_3?w=400",
    title: "PALM ANGELS",
    title_url:
      "https://modesens.com/product/palm-angels-burning-logo-relaxed-fit-cotton-jersey-t-shirt-black-white-54871684/",
    details: "Burning Logo Relaxed-fit Cotton-jersey T-shirt In Black White",
    details_url:
      "https://modesens.com/product/palm-angels-burning-logo-relaxed-fit-cotton-jersey-t-shirt-black-white-54871684/",
    offters: "$176 (60% OFF)",
    offters_url:
      "https://modesens.com/product/palm-angels-burning-logo-relaxed-fit-cotton-jersey-t-shirt-black-white-54871684/",
    price: 522,
    quantity: 1,
    price_url:
      "https://modesens.com/product/palm-angels-burning-logo-relaxed-fit-cotton-jersey-t-shirt-black-white-54871684/",
    compare: "Compare 22 stores",
    compare_url:
      "https://modesens.com/product/palm-angels-burning-logo-relaxed-fit-cotton-jersey-t-shirt-black-white-54871684/",
  },
  {
    image: "https://cdn.modesens.com/availability/58124204_1?w=400",
    title: "CASABLANCA",
    title_url:
      "https://modesens.com/product/casablanca-contrast-panel-funnel-neck-regular-fit-shell-jacket-white-47736393/",
    details: "Contrast-panel Funnel-neck Regular-fit Shell Jacket In White",
    details_url:
      "https://modesens.com/product/casablanca-contrast-panel-funnel-neck-regular-fit-shell-jacket-white-47736393/",
    offters: "$765 (45% OFF)",
    offters_url:
      "https://modesens.com/product/casablanca-contrast-panel-funnel-neck-regular-fit-shell-jacket-white-47736393/",
    price: 1528,
    quantity: 1,
    price_url:
      "https://modesens.com/product/casablanca-contrast-panel-funnel-neck-regular-fit-shell-jacket-white-47736393/",
    compare: "Compare 22 stores",
    compare_url:
      "https://modesens.com/product/casablanca-contrast-panel-funnel-neck-regular-fit-shell-jacket-white-47736393/",
  },
  {
    image: "https://cdn.modesens.com/availability/52076319?w=400",
    title: "VERSACE",
    title_url:
      "https://modesens.com/product/versace-silver-baroque-silk-shorts-male-print-60-black-45412214/",
    details: "Silver Baroque Silk Shorts, Male, Print, 60 In Black",
    details_url:
      "https://modesens.com/product/versace-silver-baroque-silk-shorts-male-print-60-black-45412214/",
    offters: "$359 (65% OFF)",
    offters_url:
      "https://modesens.com/product/versace-silver-baroque-silk-shorts-male-print-60-black-45412214/",
    price: 1065,
    quantity: 1,
    price_url:
      "https://modesens.com/product/versace-silver-baroque-silk-shorts-male-print-60-black-45412214/",
    compare: "Compare 22 stores",
    compare_url:
      "https://modesens.com/product/versace-silver-baroque-silk-shorts-male-print-60-black-45412214/",
  },
];

function Wishlist(props) {
  const handleDelete = (id) => {
    console.log(id);
  };
  console.log(data);
  return (
    <Container maxW="90%" marginTop={"20px"}>
      <SimpleGrid columns={{ lg: 4, md: 3, base: 1 }} spacing={10}>
        {data.length > 0 &&
          data.map((el, i) => {
            return (
              <Box
                key={i + 1}
                shadow={"xs"}
                padding=".875rem"
                position={"relative"}
              >
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Image src={el.image} width={"50%"} height="200px" />
                </Box>

                <Flex
                  direction={"column"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Text
                    fontWeight={"600"}
                    fontSize="1.2rem"
                    marginBottom={"8px"}
                  >
                    Rag&Bone
                  </Text>
                  <Text color={"gray.400"} marginBottom={"8px"}>
                    Women's Hazel High Heel Ankle Boots
                  </Text>
                  <Text marginBottom={"8px"} color={"red.500"}>
                    $359 (65% OFF){" "}
                    <Text as="span" color={"blackAlpha.800"}>
                      -$495
                    </Text>
                  </Text>

                  <Text marginBottom={"8px"} color={"gray.400"}>
                    1Store
                  </Text>
                </Flex>
                <Box
                  rounded="full"
                  width={"30px"}
                  position="absolute"
                  top={"10px"}
                  right="10px"
                  color="red.500"
                >
                  <AiFillHeart
                    onClick={(el) => handleDelete(el.id)}
                    fontSize={"2.2rem"}
                  />
                </Box>
              </Box>
            );
          })}
      </SimpleGrid>
    </Container>
  );
}

export default Wishlist;
