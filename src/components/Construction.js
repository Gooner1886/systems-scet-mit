import {
  Box,
  Text,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import WithSubnavigation from "./Navbar/Navbar";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logged from "./context"
import Footer from "./Footer";

function Construction(props) {
  
  const user=useContext(Logged);
  const navigate=useNavigate();
  console.log(user);
  
  useEffect(()=>{if(!user.value) navigate("/login")},[user.value]);

  return (
    <>
      <WithSubnavigation />
      <Stack
        direction={["column", "row"]}
        spacing="100px"
        padding={"80px"}
        marginLeft={"150px"}
      >
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
          <Image src="./landscape-logo.jpg" />
          <Box
            padding={"5px"}
            paddingTop={"20px"}
            display={"inline-block"}
            alignItems={"center"}
            marginLeft={"13px"}
          >
            {/* <Stack isInline>
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
            ></Text> */}
          </Box>
          <Text
            fontFamily={"initial"}
            fontWeight={"semibold"}
            textAlign={"center"}
            paddingTop={"20px"}
            fontSize={"20px"}
            textColor={"black"}
          >
            MOM of BOS - 03/12/21
          </Text>
          <Text isTruncated padding={"10px"} textColor={"gray"}>
            Submission of BOS meeting - SCET held on 03.12.21 to the Registrar
          </Text>

          <Button
            colorScheme="pink"
            variant="outline"
            width={"90px"}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1fI9Siljvzjf4UHXprK-w0qjxJ-oH2lw7/view"
              )
            }
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
          <Image src="/landscape-logo.jpg" />
          <Box
            padding={"5px"}
            paddingTop={"20px"}
            display={"inline-block"}
            alignItems={"center"}
            marginLeft={"13px"}
          >
            {/* <Stack isInline>
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
            </Stack> */}
          </Box>
          <Text
            fontFamily={"initial"}
            fontWeight={"semibold"}
            textAlign={"center"}
            paddingTop={"20px"}
            fontSize={"20px"}
            textColor={"black"}
          >
            Board Of Studies in Engineering
          </Text>
          <Text isTruncated padding={"10px"} textColor={"gray"}>
            Day of Date - Tuesday, 28/01/2020 <br /> Time - 2pm onwards <br />{" "}
            Venue - Amdocs conference
          </Text>

          <Button
            colorScheme="pink"
            variant="outline"
            width={"90px"}
            padding={"2px"}
            height={"30px"}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1EY1OS5PT1P5-9N6D0tjUH1-MOKG1-sJB/view"
              )
            }
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
          <Image src="./landscape-logo.jpg" />
          <Box
            padding={"5px"}
            paddingTop={"20px"}
            display={"inline-block"}
            alignItems={"center"}
            marginLeft={"13px"}
          >
            {/* <Stack isInline>
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
            </Text> */}
          </Box>
          <Text
            fontFamily={"initial"}
            fontWeight={"semibold"}
            textAlign={"center"}
            paddingTop={"20px"}
            fontSize={"20px"}
            textColor={"black"}
          >
            Credit Hour Calculation
          </Text>
          <Text isTruncated padding={"10px"} textColor={"gray"}>
            Trimester-wise credit division, theory and lab-wise for every
            subject
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
            onClick={() =>
              window.open(
                "https://docs.google.com/spreadsheets/d/1VHewADL28j9ZEsMJEWwDub-YlymgnIH4/edit#gid=2119904433"
              )
            }
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
      </Stack>
      <Footer/>
    </>
  );
}

export default Construction;
