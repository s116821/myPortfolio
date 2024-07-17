import React, { useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, VStack, HStack, Container, Image } from "@chakra-ui/react";
import DjangoIcon from "../images/django-icon-for-page.jpg";

function DjangoDemoPage() {
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:8000/api/demo/')
       .then(response => response.json())
       .then(data => setMessage(data.message));
    }, []);
  
    const handleClick = () => {
      fetch('http://127.0.0.1:8000/api/demo/')
       .then(response => response.json())
       .then(data => setMessage(data.message));
    };
  
    return (
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
            with the doubled value.  
          </Container>
          <Heading as="h2" size="xl"></Heading>
          <Heading as="h2" size="xl">Endpoint Buttons</Heading>
          <HStack spacing={4} alignItems="center">          
            <div>
              <button onClick={handleClick}>Get message from Django!</button>
              <p>{message}</p>
            </div>
            <div>
              <button onClick={handleClick}>Get message from Django!</button>
              <p>{message}</p>
            </div>
          </HStack>
        </VStack>
      </FullScreenSection> 
    );
}

export default DjangoDemoPage;