import { Heading, Stack, Text, Button } from "@chakra-ui/react";
import React from "react";

function ResearchInterests() {
  return (
    <Stack
      direction={["column", "column", "row"]}
      width={"100%"}
      pl={12}
      pr={12}
      pb={12}
      pt={4}
      mt={0}
      justifyContent={"space-evenly"}
      bgColor={"yellow.50"}
    >
      <Heading
        fontFamily={("Zilla Slab", "Poppins")}
        fontSize={["2xl", "4xl", "5xl"]}
        bgGradient="linear(to-r, gray.500, gray.700)"
        bgClip={"text"}
      >
        Research Interests
      </Heading>
      <Stack direction={"column"} p={4} flex={0.45}>
        <Text
          noOfLines={[15, 11, 11]}
          fontFamily={("Zilla Slab", "Poppins")}
          fontWeight={300}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <br />
        <Text
          noOfLines={[9, 6, 6]}
          fontFamily={("Zilla Slab", "Poppins")}
          fontWeight={300}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <br />
        <Button colorScheme="orange" variant="outline" fontFamily={"Zilla Slab", "Poppins"} fontWeight={300}>
          Research Accolades
        </Button>
      </Stack>
    </Stack>
  );
}

export default ResearchInterests;
