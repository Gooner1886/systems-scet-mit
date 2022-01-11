import WithSubnavigation from "../Navbar/Navbar"
import {Box} from "@chakra-ui/react"

function LoginPage()
{
    return <>
    <WithSubnavigation/>
    <Box w='100%' p={4} color='white' overflowX='hidden' textAlign='center' bgColor='rgba(66, 153, 225, 0.6)'>
            System-SCET@MITWPU
    </Box>
    </>
}

export default LoginPage;