import React, { useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { 
  ChakraProvider,
  Link, 
  Heading, 
  VStack, 
  HStack, 
  Container, 
  Image,
  Button,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  extendTheme } from "@chakra-ui/react";
import DjangoIcon from "../images/django-icon-for-page.jpg";

// Modifying standard hyperlink theming to make it stick out
const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
          color: "teal.500",
        },
      },
    },
  },
});


function DjangoDemoPage() {
    const { REACT_APP_DJANGO_ROOT_URL } = process.env;
    const [djangoOutput, setDjangoOutput] = useState('');
  
    useEffect(() => {
      fetch(`${REACT_APP_DJANGO_ROOT_URL}api/rng/`)
       .then(response => response.json())
       .then(data => setDjangoOutput(data.random_number));
    }, []);
  
    const handleRngRequest = () => {
      fetch(`${REACT_APP_DJANGO_ROOT_URL}api/rng/`)
       .then(response => response.json())
       .then(data => setDjangoOutput(data.random_number));
    };

    const handleDoubleRequest = () => {
      fetch(`${REACT_APP_DJANGO_ROOT_URL}api/double/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number: djangoOutput })
      })
      .then(response => response.json())
      .then(data => setDjangoOutput(data.doubled_number));
    };
  
    return (
      <ChakraProvider theme={theme}>
        <FullScreenSection
        backgroundColor="#353535"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
        >
          <VStack spacing={4} alignItems="center">
            <Heading as="h1" size="xl" id="django-title">
              Django Endpoint Practice
            </Heading>
            <Image src={DjangoIcon} alt="Django Icon" borderRadius='40' objectFit='cover' boxSize='350px'/>
            <Heading as="h2" size="xl"></Heading>
            <Heading as="h2" size="xl">Project Description</Heading>
            <Container>
              This project concerns the implementation of two endpoints via a Django backend that is hosted in AWS EC2.  
              The endpoints are connected to two buttons: one button, when pressed, will populate the result box with a
              randomly generated number determined and supplied by the backend; the other button, when pressed, will send
              the current number in the result box to the Django backend to double the value and update the result box value
              with the doubled value. The source code for the backend can be found at {" "} 
              <Link href="https://github.com/s116821/myPortfolio/tree/main/backend" isExternal>
                this page on my github
              </Link>.
            </Container>
            <Heading as="h2" size="xl"></Heading>
            <Heading as="h2" size="xl">Endpoint Buttons</Heading>
            <HStack spacing={4} alignItems="center">          
              <Button colorScheme='teal' onClick={handleRngRequest}>Use Django to generate a random number!</Button>
              <Button colorScheme='pink' onClick={handleDoubleRequest}>Use Django to double the current number!</Button>
            </HStack>
            <Box alignItems='center' textAlign="center" w='60%' bg='black' borderWidth='1px' borderRadius='full'>
              <Stat>
                <VStack>
                  <StatLabel>Backend Result</StatLabel>
                  <StatNumber>{djangoOutput}</StatNumber>
                  <StatHelpText>1 {"<"} Random Numbers {"<"} 10 & Doubled values {"<="} 1024</StatHelpText>
                </VStack>
              </Stat>
            </Box>
          </VStack>
        </FullScreenSection> 
      </ChakraProvider>
    );
}

export default DjangoDemoPage;