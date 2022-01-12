import {Box, Heading} from '@chakra-ui/react';
import WithSubnavigation from './Navbar/Navbar'

function Construction()
{

    return <>
    <WithSubnavigation/>
    <Heading paddingLeft={10} paddingTop={10}>UNDER CONSTRUCTION</Heading>
    <Box w='100%' p={4} position='fixed' bottom='0' color='white' overflowX='hidden' textAlign='center' bgColor='rgba(66, 153, 225, 0.6)'>
            System-SCET@MITWPU
    </Box>
    </>
}

export default Construction;