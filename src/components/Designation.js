import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Designation() {
  return (
    <Box
      width={"100%"}
      height={"350px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"end"}
      p={8}
      bgColor={"lightblue"}
      justifyContent={"flex-end"}
    >
      <VStack spacing={4} p={4} mr={16} mb={12} mt={12} ml={10} alignItems={"flex-start"}>
        <Heading fontFamily={"Zilla Slab, Poppins"}>Dan Abramov, PHD</Heading>
        <Text fontFamily={"Zilla Slab, Poppins"} fontWeight={300}>Professor of CSE</Text>
      </VStack>
    </Box>
  );
}

export default Designation;
