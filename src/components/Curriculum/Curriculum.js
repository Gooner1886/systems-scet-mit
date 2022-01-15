import React, { useContext } from "react";
import { Badge, Box, Image, Stack, Text, Button } from "@chakra-ui/react";
import { WithSubnavigation as PreLogin } from "../Navbar/PreLoginNavbar";
import { WithSubnavigation as PostLogin } from "../Navbar/Navbar";
import Logged from "../context";
import Footer from "../Footer";

const cards = [
    {
      name: "First Year",
      image: "https://images.collegedunia.com/public/college_data/images/appImage/1518500807mitbuilding6.jpg?mode=stretch",
      summary:
        "Our comprehensive first year curriculum has a variety of subjects that lay the foundations needed for the upcoming specific 3-year CSE course of the program.",
      link:"https://drive.google.com/file/d/1XeQkWHlhuLbeScVpVl_sggYCZGZWkovp/view?usp=sharing"
    },
    {
      name: "Second Year",
      image: "https://images.collegedunia.com/public/college_data/images/appImage/1518500807mitbuilding6.jpg?mode=stretch",
      summary:
        "The Second Year curriculum provides subject-wise beginnings and basics of programming languages through subjects like OOPs, DS and more hard-ware based coding .",
      link:"https://drive.google.com/file/d/1NZBCqMtxIfebPYTAH3r8o_CgvzdvisVY/view?usp=sharing"
    },
    {
      name: "Third Year",
      image: "https://images.collegedunia.com/public/college_data/images/appImage/1518500807mitbuilding6.jpg?mode=stretch",
      summary:
        "The 3rd Year of our CSE program includes core computer science subjects that enables our aspiring engineers to explore their specific fields of interest.",
      link:"https://drive.google.com/file/d/1htpPCqTaUBTbWcNKbQcvqZFBMd8fOQHI/view?usp=sharing"
    },
    {
      name: "Fourth Year",
      image: "https://images.collegedunia.com/public/college_data/images/appImage/1518500807mitbuilding6.jpg?mode=stretch",
      summary:
        "The Final Year of our 4-year program marks the end of the complete rounding of  our market-ready skilled engineers with their final projects and electives.",
      link:"https://drive.google.com/file/d/1HEr0TV2cBD1iQAhoM1buxvXRbBD9RMRg/view?usp=sharing"
    }
];


function Curriculum(){
    const user=useContext(Logged);
    console.log(user);

  return (
    <>
    {user.value ? <PostLogin /> : <PreLogin />}
    <Stack 
      direction={["column", "row"]}
      spacing="100px"
      padding={"80px"}
      marginLeft={"30px"}
    >
      {cards.map((card) => (
        <Box
          w="300px"
          alignItems={"center"}
          // margin={"200px"}
          boxShadow={"md"}
          bg="gray.200"
          overflow={"hidden"}
          rounded={"20px"}
          padding={"1px"}
          height={"400px"}
        >
          <Image src={card.image} />
          <Box
            paddingTop={"20px"}
            display={"inline-block"}
            alignItems={"center"}
            marginLeft={"10px"}
          >
            <Text
              fontFamily={"poppins"}
              fontWeight={"semibold"}
              textAlign={"center"}
              paddingTop={"10px"}
              fontSize={"20px"}
              textColor={"black"}
            >
              {card.name}
            </Text>
          </Box>
          <Text padding={"10px"} textColor={"gray"}>
            {card.summary}
          </Text>

          <Button
              onClick={()=>window.open(card.link)}
              colorScheme="pink"
              variant="outline"
              width={"90px"}
              padding={"2px"}
              height={"30px"}
              fontSize={"12px"}
              marginLeft={"50px"}
              marginTop={"10px"}
              _hover={{
                bg: "white",
                outline: "none",
                variant: "solid",
                transform: "translateY(-5px)",
                transition: "0.5s",
              }}
            >
              READ MORE
            </Button>
        </Box>
      ))}
    </Stack>
    <Footer/>
  </>
);
};

export default Curriculum;