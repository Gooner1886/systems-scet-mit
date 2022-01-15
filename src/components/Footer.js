import React, { useRef, useEffect, useState } from 'react';
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue, VStack, Button,
} from '@chakra-ui/react';
import {FaTwitter, FaYoutube, FaInstagram, FaFacebook} from 'react-icons/fa';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2g2NTAxIiwiYSI6ImNreWUxYnVsYjA3dDEycHM4aGpydHMybDMifQ.dD-cifuZPoBrE_Pd6keU7A';


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({
                          children,
                          label,
                          href,
                      }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(73.8154);
    const [lat, setLat] = useState(18.5181);
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'7xl'} py={10}>
                <SimpleGrid columns={5} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>SCET</ListHeader>
                        <Link href={'#'}>Research & Innovation</Link>
                        <Link href={'#'}>Student Chapter</Link>
                        <Link href={'#'}>Home</Link>
                        <Link href={'#'}>Contact Us</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={'#'}>Help Center</Link>
                        <Link href={'#'}>Safety Center</Link>
                        <Link href={'#'}>Community Guidelines</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Legal</ListHeader>
                        <Link href={'#'}>Cookies Policy</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Law Enforcement</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Social</ListHeader>
                        <VStack direction={'row'} spacing={3} align='left'>
                            <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                                Twitter
                            </Button>
                            <Button colorScheme='red' leftIcon={<FaYoutube />}>
                                Youtube
                            </Button>
                            <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                                Facebook
                            </Button>
                        </VStack>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Find Us</ListHeader>
                        <div>
                            <div ref={mapContainer} style={{ height: '150px', width: '250px'}} />
                        </div>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text>© 2022 MIT-WPU SCET. All rights reserved</Text>
                </Container>
            </Box>
        </Box>
    );
}

