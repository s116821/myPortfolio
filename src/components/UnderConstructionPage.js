import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import constructionIcon from '../images/construction.png';
import { Image, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "My apologies! This page is currently under construction and will hopefully be finished soon!";

const UnderConstructionPage = () => (
  <ChakraProvider>
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#353535"
    >
      <VStack spacing={4} alignItems="center" textAlign="center" >
        <Image src={constructionIcon} alt="Django Icon" borderRadius='40' boxSize='400px' />
        <Heading as="h2" size="xl"></Heading>
        <Heading as="h1" size="3xl">{greeting}</Heading>
      </VStack>
    </FullScreenSection>
  </ChakraProvider>
);

export default UnderConstructionPage;
