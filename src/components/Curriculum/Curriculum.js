import React, { useContext } from "react";
import { Badge, Box, Image, Stack, Text, Button } from "@chakra-ui/react";
import { WithSubnavigation as PreLogin } from "../Navbar/PreLoginNavbar";
import { WithSubnavigation as PostLogin } from "../Navbar/Navbar";
import Logged from "../context";
import Footer from "../Footer";

const cards = [
    {
      name: "All Circulars",
      image: "https://images.collegedunia.com/public/college_data/images/appImage/1518500807mitbuilding6.jpg?mode=stretch",
      summary:
        "View all the circulars till date",
      link:"https://drive.google.com/drive/folders/1Jbfyz4Tcnx0gncDRDfChOdxKm1H-Z6zW?usp=sharing"
    },
    {
      name: "2021",
      image: "https://images.collegedunia.com/public/college_data/images/appImage/1518500807mitbuilding6.jpg?mode=stretch",
      summary:"View circulars and notices for the year 2021",
      link:"https://drive.google.com/drive/folders/18Gg2WX39ncsfL2jfpP60LY9d-5iRqepj?usp=sharing"
    },
    {
      name: "2022",
      image: "https://images.collegedunia.com/public/college_data/images/appImage/1518500807mitbuilding6.jpg?mode=stretch",
      summary:"View circulars and notices for the year 2022",
      link:"https://drive.google.com/drive/folders/18KZt-OM1bmdq4YmBjX90xRSYO7JSCpw3?usp=sharing"
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
          height={"300px"}
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