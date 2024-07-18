import React from "react";
import profile from '../images/portfolio_profile.jpeg';
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Steven!";
const bio1 = "A Software & Mechanical Engineer";
const bio2 = "specialized in many tech stacks";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#512DA8"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar size="2xl" name="Steven" src={profile}> </Avatar>
      <Heading as="h4" size="sm">{greeting}</Heading>
      <Heading as="h2" size="xl"></Heading>
      <Heading as="h2" size="xl">{bio1}</Heading>
      <Heading as="h2" size="xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
