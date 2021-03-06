import React, { useContext } from "react";
import { Badge, Box, Image, Stack, Text, Button,SimpleGrid } from "@chakra-ui/react";
import { WithSubnavigation as PreLogin } from "./Navbar/PreLoginNavbar";
import { WithSubnavigation as PostLogin } from "./Navbar/Navbar";
import Logged from "./context";
import { Link} from "react-router-dom";
import Footer from "./Footer";

const Cards = (props) => {
  const user = useContext(Logged);

  return (
    <>
      {user.value ? <PostLogin /> : <PreLogin />}
      <SimpleGrid minChildWidth={"300px"}  spacing='200px'>
      <Stack
        direction={["column", "row"]}
        spacing="100px"
        padding={"80px"}
        marginLeft={"150px"}
      >
        {props.cards.map((card) => (
          <Box
            w="300px"
            alignItems={"center"}
            // margin={"200px"}
            boxShadow={"md"}
            bg="gray.200"
            overflow={"hidden"}
            rounded={"20px"}
            padding={"1px"}
            height={"450px"}
          >
            <Image src={card.image} width={"300px"} height={"200px"}/>
            
            <Box
              padding={"5px"}
              paddingTop={"20px"}
              display={"inline-block"}
              alignItems={"center"}
              marginLeft={"13px"}
            >
              <Stack isInline marginLeft={"40px"} spacing={"20px"}>
                <Badge
                  colorScheme={"pink"}
                  variant={"outline"}
                  width={"50px"}
                  p={1}
                  textAlign={"center"}
                >
                  SCET
                </Badge>
                <Badge
                 
                  colorScheme={"blue"}
                  variant={"outline"}
                  p={1}
                  textAlign={"center"}
                >
                  {card.department}
                </Badge>
                <Badge
                  colorScheme={"blue"}
                  variant={"outline"}
                  p={1}
                  textAlign={"center"}
                >
                  {card.type}
                </Badge>
              </Stack>
              <Text
                fontFamily={"initial"}
                fontWeight={"semibold"}
                textAlign={"center"}
                paddingTop={"20px"}
                paddingLeft={"25px"}
                fontSize={"30px"}
                textColor={"black"}
                
              >
                {card.name}
              </Text>
            </Box>
            <Text isTruncated padding={"10px"} textColor={"gray"} marginLeft={"10px"}>
              {card.summary}
            </Text>

            <Link to={`${card.clubNo}`}>
              <Button
                colorScheme="pink"
                variant="outline"
                width={"90px"}
                padding={"2px"}
                height={"30px"}
                fontSize={"12px"}
                marginLeft={"90px"}
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
            </Link>
          </Box>
          
        ))}

        {/* <Box
          w="300px"
          alignItems={"center"}
          // margin={"200px"}
          boxShadow={"md"}
          bg="gray.200"
          overflow={"hidden"}
          rounded={"20px"}
          padding={"1px"}
          height={"420px"}
        >
          <Image src="./thumb1.png" />
          <Box
            padding={"5px"}
            paddingTop={"20px"}
            display={"inline-block"}
            alignItems={"center"}
            marginLeft={"13px"}
          >
            <Stack isInline>
              <Badge
                colorScheme={"pink"}
                variant={"outline"}
                width={"50px"}
                p={1}
                textAlign={"center"}
              >
                SCET
              </Badge>
              <Badge
                colorScheme={"blue"}
                variant={"outline"}
                p={1}
                textAlign={"center"}
              >
                CSE DEPARTMENT
              </Badge>
              <Badge
                colorScheme={"blue"}
                variant={"outline"}
                p={1}
                textAlign={"center"}
              >
                TECH CLUB
              </Badge>
            </Stack>
            <Text
              fontFamily={"initial"}
              fontWeight={"semibold"}
              textAlign={"center"}
              paddingTop={"20px"}
              fontSize={"20px"}
              textColor={"black"}
            >
              {props.name}
            </Text>
          </Box>
          <Text isTruncated padding={"10px"} textColor={"gray"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley <br />
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </Text>

          <Button
            colorScheme="pink"
            variant="outline"
            width={"90px"}
            padding={"2px"}
            height={"30px"}
            onClick={() => window.open("https://innovators-hub.in")}
            fontSize={"12px"}
            marginLeft={"90px"}
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

        <Box
          w="300px"
          alignItems={"center"}
          // margin={"200px"}
          boxShadow={"md"}
          bg="gray.200"
          overflow={"hidden"}
          rounded={"20px"}
          padding={"1px"}
          height={"420px"}
        >
          <Image src="./thumb1.png" />
          <Box
            padding={"5px"}
            paddingTop={"20px"}
            display={"inline-block"}
            alignItems={"center"}
            marginLeft={"13px"}
          >
            <Stack isInline>
              <Badge
                colorScheme={"pink"}
                variant={"outline"}
                width={"50px"}
                p={1}
                textAlign={"center"}
              >
                SCET
              </Badge>
              <Badge
                colorScheme={"blue"}
                variant={"outline"}
                p={1}
                textAlign={"center"}
              >
                CSE DEPARTMENT
              </Badge>
              <Badge
                colorScheme={"blue"}
                variant={"outline"}
                p={1}
                textAlign={"center"}
              >
                TECH CLUB
              </Badge>
            </Stack>
            <Text
              fontFamily={"initial"}
              fontWeight={"semibold"}
              textAlign={"center"}
              paddingTop={"20px"}
              fontSize={"20px"}
              textColor={"black"}
            >
              {props.name}
            </Text>
          </Box>
          <Text isTruncated padding={"10px"} textColor={"gray"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley <br />
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </Text>

          <Button
            colorScheme="pink"
            variant="outline"
            width={"90px"}
            padding={"2px"}
            height={"30px"}
            fontSize={"12px"}
            marginLeft={"90px"}
            marginTop={"10px"}
            onClick={() => window.open("https://innovators-hub.in")}
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
        </Box> */}
      </Stack>
      </SimpleGrid>
      <Footer/>
    </>
  );
};

export default Cards;
