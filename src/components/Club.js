import React, { useContext } from "react";
import { background, Box, Img, Text, Wrap,WrapItem,Center,Stack,Image, Button, transition, transform } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { useParams } from "react-router";
import { WithSubnavigation as PreLogin } from "./Navbar/PreLoginNavbar";
import { WithSubnavigation as PostLogin } from "./Navbar/Navbar";
import Logged from "./context"
import Footer from "./Footer";
import Cards from "./Cards";

const Club = (props) => {
  const { clubNo } = useParams();
/*   console.log(clubNo);
  console.log(props.clubDetails); */
  const currentClubArray = props.clubDetails.filter(
    (club) => club.clubNo == clubNo
  );
/*   console.log(currentClubArray); */

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})
  const user = useContext(Logged);

  return (
    <>
      {user.value ? <PostLogin /> : <PreLogin />}
    <Box
      
      height={"1000px"}
      justifyItems={"center"}
      overflow={"hidden"}
     // backgroundImage={"./scard.jpg"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      
   >
     <Box 
      height={{
        base: '100%', // 0-48em
        md: '50%', // 48em-80em,
        xl: '25%', // 80em+
      }}
      fontSize={['sm', 'md', 'lg', 'xl']}
      backgroundColor={"blue.400"}
      height={"80px"}
      overflow={"hidden"}
  
     >
        <Text
          fontFamily={"poppins"}
          fontSize={"xxx-large"}
          textAlign={"center"}
          padding={"20px"}
          paddingTop={"4px"}
          //overflow={"hidden"}
         // textColor={"teal.50"}
         textColor={"whiteAlpha.900"}
          letterSpacing={"4px"}
         // marginLeft={"43px"}
         justify={"center"}
          textShadow={"2xl"}
        >
          STUDENT CLUBS</Text>
     </Box>

     
  <Box w='500px' h='300px' marginTop={"50px"} marginLeft={"25rem"} >
      <Image src={currentClubArray[0].image} marginBottom={"20px"} borderRadius={"50%"}  height={"300px"}/>
    
  </Box>
  <Box>
  <Text
      fontFamily={"poppins"}
      fontSize={"xxx-large"}
      textAlign={"center"}
      //padding={"20px"}
      paddingTop={"0px"}
      //marginTop={"40px"}
      //overflow={"hidden"}
     // textColor={"teal.50"}
     //textColor={"whiteAlpha.900"}
      letterSpacing={"4px"}
     // marginLeft={"43px"}
     justify={"center"}
      textShadow={"2xl"} 
      padding={"30px"}
      borderBottom={"1px"}
    >{currentClubArray[0].name}</Text> 
  </Box>

  <Box marginTop={"0px"} padding={"40px"} textAlign={"center"} paddingBottom={"0px"}>
      <Text>{currentClubArray[0].summary}
        </Text>
        <Box marginTop={"50px"} color={"whiteAlpha.800"} textShadow={"md"}>

        <Button marginRight={"40px"} backgroundColor={"blue.500"} variant={"outline"} colorScheme={"blue"}
         textColor={"whiteAlpha.800"} paddingRight={"40px"} paddingLeft={"40px"}
         onClick={() => window.open(currentClubArray[0].events)}
         _hover={{
           cursor:'pointer',
           color: 'black',
           border: 'none',
           transition: '0.5s',
           background: 'pink.500',
           transform: 'translatey(-10px)',
           
         }}
         >EVENTS</Button>

        <Button backgroundColor={"blue.500"} variant={"outline"} colorScheme={"green"}
          onClick={()=>window.open(currentClubArray[0].achievements)}
         _hover={{
          cursor:'pointer',
          color: 'black',
          border: 'none',
          transition: '0.5s',
          background: 'pink.500',
          transform: 'translatey(-10px)',
         }}
         textColor={"whiteAlpha.800"}>ACHIEVEMENTS</Button>
        </Box>
  </Box>
   </Box>
        
   <Footer/>
  </>
  );
};

//<a href={currentClubArray[0].events} style={{color: 'red', fontSize: '20px'}}>Events</a>
    
      //<a href={currentClubArray[0].achievements} style={{color: 'green', fontSize: '20px'}}>Achievements</a>
    

export default Club;
