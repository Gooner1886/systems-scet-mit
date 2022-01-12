import React from "react";
import { Badge, Box,Image,Stack,Text,Button, transition, styled} from "@chakra-ui/react";
import WithSubnavigation from './Navbar/Navbar'

const Cards = (props)=>{

    return(<>
        <WithSubnavigation/>
        <Stack direction={['column', 'row']} spacing='100px'
            padding={"80px"}
            marginLeft={"150px"}
        
        >
        <Box w = '300px'
         alignItems={"center"} 
        // margin={"200px"} 
         boxShadow={"md"} 
         bg= 'gray.200'
         overflow={"hidden"}
         rounded={"20px"}
         padding={"1px"}
         height={"420px"}
         > 
            <Image src="./thumb1.png"/>
            <Box padding={"5px"} 
            paddingTop={"20px"} 
            
            display={"inline-block"} 
            alignItems={"center"} 
            marginLeft={"13px"}
            >
            <Stack isInline>
                <Badge colorScheme={"pink"} variant={"outline"} width={"50px"} textAlign={"center"}>SCET</Badge>
                <Badge colorScheme={"blue"} variant={"outline"}  textAlign={"center"}>CSE DEPARTMENT</Badge>
                <Badge colorScheme={"blue"} variant={"outline"}  textAlign={"center"}>TECH CLUB</Badge>
            </Stack>
            <Text fontFamily={"initial"} 
                fontWeight={"semibold"}
                textAlign={"center"}
                paddingTop={"20px"}
                fontSize={"20px"}
                textColor={"black"}
            >
                {props.name}
            </Text>
            
            </Box>
            <Text isTruncated
                padding={"10px"}
                textColor={"gray"}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley <br/>of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. 
            </Text>

            <Button colorScheme="pink"
             variant='outline' 
             width={"90px"} 
             padding={"2px"} 
             height={"30px"}
             fontSize={"12px"}
             marginLeft={"90px"}
             marginTop={"10px"}
             _hover={{
                bg: 'white',
                outline: "none",
                variant: "solid",
                transform: "translateY(-5px)",
                transition: "0.5s",
             }}
             >
                READ MORE
            </Button>
        </Box>

        <Box w = '300px'
         alignItems={"center"} 
        // margin={"200px"} 
         boxShadow={"md"} 
         bg= 'gray.200'
         overflow={"hidden"}
         rounded={"20px"}
         padding={"1px"}
         height={"420px"}
         > 
            <Image src="./thumb1.png"/>
            <Box padding={"5px"} 
            paddingTop={"20px"} 
            
            display={"inline-block"} 
            alignItems={"center"} 
            marginLeft={"13px"}
            >
            <Stack isInline>
                <Badge colorScheme={"pink"} variant={"outline"} width={"50px"} textAlign={"center"}>SCET</Badge>
                <Badge colorScheme={"blue"} variant={"outline"}  textAlign={"center"}>CSE DEPARTMENT</Badge>
                <Badge colorScheme={"blue"} variant={"outline"}  textAlign={"center"}>TECH CLUB</Badge>
            </Stack>
            <Text fontFamily={"initial"} 
                fontWeight={"semibold"}
                textAlign={"center"}
                paddingTop={"20px"}
                fontSize={"20px"}
                textColor={"black"}
            >
                {props.name}
            </Text>
            
            </Box>
            <Text isTruncated
                padding={"10px"}
                textColor={"gray"}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley <br/>of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. 
            </Text>

            <Button colorScheme="pink"
             variant='outline' 
             width={"90px"} 
             padding={"2px"} 
             height={"30px"}
             fontSize={"12px"}
             marginLeft={"90px"}
             marginTop={"10px"}
             _hover={{
                bg: 'white',
                outline: "none",
                variant: "solid",
                transform: "translateY(-5px)",
                transition: "0.5s",
             }}
             >
                READ MORE
            </Button>
        </Box>

        <Box w = '300px'
         alignItems={"center"} 
        // margin={"200px"} 
         boxShadow={"md"} 
         bg= 'gray.200'
         overflow={"hidden"}
         rounded={"20px"}
         padding={"1px"}
         height={"420px"}
         > 
            <Image src="./thumb1.png"/>
            <Box padding={"5px"} 
            paddingTop={"20px"} 
            
            display={"inline-block"} 
            alignItems={"center"} 
            marginLeft={"13px"}
            >
            <Stack isInline>
                <Badge colorScheme={"pink"} variant={"outline"} width={"50px"} textAlign={"center"}>SCET</Badge>
                <Badge colorScheme={"blue"} variant={"outline"}  textAlign={"center"}>CSE DEPARTMENT</Badge>
                <Badge colorScheme={"blue"} variant={"outline"}  textAlign={"center"}>TECH CLUB</Badge>
            </Stack>
            <Text fontFamily={"initial"} 
                fontWeight={"semibold"}
                textAlign={"center"}
                paddingTop={"20px"}
                fontSize={"20px"}
                textColor={"black"}
            >
                {props.name}
            </Text>
            
            </Box>
            <Text isTruncated
                padding={"10px"}
                textColor={"gray"}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley <br/>of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. 
            </Text>

            <Button colorScheme="pink"
             variant='outline' 
             width={"90px"} 
             padding={"2px"} 
             height={"30px"}
             fontSize={"12px"}
             marginLeft={"90px"}
             marginTop={"10px"}
             _hover={{
                bg: 'white',
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
        <Box w='100%' p={4} position='fixed' bottom='0' color='white' overflowX='hidden' textAlign='center' bgColor='rgba(66, 153, 225, 0.6)'>
            System-SCET@MITWPU
        </Box>
        </>
    );
}

export default Cards;