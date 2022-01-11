import React from "react";
import { Stack, Heading, Text, Button } from "@chakra-ui/react";

function PublicationOverview() {
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
    >
      <Heading
        fontFamily={("Zilla Slab", "Poppins")}
        fontSize={["2xl", "4xl", "5xl"]}
        bgGradient="linear(to-r, gray.500, gray.700)"
        bgClip={"text"}
      >
        Publications
      </Heading>
      <Stack direction={"column"} p={4} flex={0.325}>
        <Text
          noOfLines={[15, 11, 11]}
          fontFamily={("Zilla Slab", "Poppins")}
          fontWeight={400}
        >
          D. Tenant "This is your publication title. Click to edit", Accepted,
          Institute or journal title (2023)
        </Text>
        <br />
        <Text
          noOfLines={[9, 6, 6]}
          fontFamily={("Zilla Slab", "Poppins")}
          fontWeight={400}
        >
          D. Tenant "This is your publication title. Click to edit", Accepted,
          Institute or journal title (2023)
        </Text>
        <br />
        <Text
          noOfLines={[9, 6, 6]}
          fontFamily={("Zilla Slab", "Poppins")}
          fontWeight={400}
        >
          D. Tenant "This is your publication title. Click to edit", Accepted,
          Institute or journal title (2023)
        </Text>
        <br />
        <Button colorScheme="teal" variant="outline" fontFamily={"Zilla Slab", "Poppins"} fontWeight={300}>
          View All Publications
        </Button>
      </Stack>
    </Stack>
  );
}

export default PublicationOverview;
