import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Icon } from '@chakra-ui/icons';
import { FaLinkedinIn } from "react-icons/fa";
import { InfoIcon } from "@chakra-ui/icons";
import { icons } from "react-icons/lib";


function Designation() {
  return (
    <Box className="box1"
      boxShadow={"none"}
      width={"100%"}
      height={"250px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"centre"}
      p={2}
      bgColor={"lightblue"}
      justifyContent={"flex-end"}
    >
      <VStack spacing={4} p={4} mr={16} mb={12} mt={12} ml={10} alignItems={"flex-start"}>
        <Heading fontFamily={"Zilla Slab", "Poppins"}>Dan Abramov, PHD</Heading>
        <Text fontFamily={"Zilla Slab", "Poppins"} fontWeight={300} fontSize={"lg"}>Professor of CSE</Text>
        <Icon as={FaLinkedinIn} cursor={"pointer"} w={6} h={6}/>
      
      </VStack>
    </Box>
  );
}

export default Designation;
