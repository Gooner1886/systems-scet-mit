import {Stack, Text, Image } from "@chakra-ui/react";
import React from "react";

function Introduction() {
  return (
    <Stack direction={["column", "column", "row"]} width={"100%"} pl={12} pr={12} pb={12} pt={4} justifyContent={"space-evenly"}>
      <Image
        borderRadius="full"
        boxSize={["150px", "300px", "400px"]}
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Stack direction={"column"} p={4} flex={0.4}>
        <Text noOfLines={10} fontFamily={"Zilla Slab, Poppins"} fontWeight={300}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <br/>
        <Text noOfLines={5} fontFamily={"Zilla Slab, Poppins"} fontWeight={300}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Stack>
    </Stack>
  );
}

export default Introduction;
