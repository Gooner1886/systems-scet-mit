import WithSubnavigation from "../Navbar/PreLoginNavbar"
import {Box,Button,Center,Container, Input, Stack} from "@chakra-ui/react"
import {LockIcon} from "@chakra-ui/icons"
import { useEffect, useState,useContext } from "react"
import {useLoginInterface,CheckSignIn} from "../Hooks.js"
import { useNavigate } from "react-router-dom"
import Logged from "../context"

function LoginPage()
{
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [isLoggedIn,SetLogged]=useState(null);
    const navigate=useNavigate();

    const user=useContext(Logged);

    CheckSignIn(SetLogged);
    useEffect(()=>{console.log("uid is",isLoggedIn)},[isLoggedIn]);


    const HandleSubmit=()=>{
        console.log(useLoginInterface({"email":email,"password":password,"setter":user.setter}));
        console.log(CheckSignIn(SetLogged));
    }


    const backgroundStyle={
        "backgroundImage":`url(${process.env.PUBLIC_URL + "/banner.png"})`,
        "backgroundRepeat":"no-repeat",
        "position":"fixed",
        "height":"100%",
        "width":"100%"
    }

    return (<div style={backgroundStyle}>
    <WithSubnavigation />

    {isLoggedIn?navigate("/about"):undefined}

    <Container margin='auto'>
        <Box 
            margin='150px auto 100px' 
            padding='35px' 
            bg='white' 
            height='360px' 
            width='400px' 
            borderRadius='10px' 
            colorScheme='teal'
            px='5'
        >
            <Stack spacing={6} padding="15px">
                <Center>
                <LockIcon w={70} h={70}/>
                </Center>
                
                <Input size="md" placeholder="Email" type="email" onChange={(e)=>setemail(e.target.value)}/>
                <Input size="md" placeholder="Password" type="password" onChange={(e)=>setpassword(e.target.value)}/>
                <Button colorScheme='blue' onClick={HandleSubmit}>Log In</Button>
            </Stack>
        </Box>
    </Container>

    <Box w='100%' p={4} position='fixed' bottom='0' color='white' overflowX='hidden' textAlign='center' bgColor='rgba(66, 153, 225)'>
            System-SCET@MITWPU
    </Box>
    </div>);
}

export default LoginPage;