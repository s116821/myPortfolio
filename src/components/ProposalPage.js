import React from "react";
import {
  Heading,
  VStack,
  Box,
  Text,
  Link,
  Image,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const ProposalPage = () => (
  <Box p={4}>
    <VStack spacing={8}>
      <Box>
        <Heading as="h1" size="2xl" mb={4}>
          Jewelry Box Design and 3D Printing
        </Heading>
        <Text mb={4}>A personal project to propose to my wife</Text>
      </Box>

      <Box>
        <Heading as="h2" size="md" mb={2}>
          Motivation
        </Heading>
        <Text>...</Text>
      </Box>

      <Box>
        <Heading as="h2" size="md" mb={2}>
          Tools and Techniques
        </Heading>
        <UnorderedList>
          <ListItem>...</ListItem>
          <ListItem>...</ListItem>
        </UnorderedList>
      </Box>

      <Box>
        <Heading as="h2" size="md" mb={2}>
          Challenges and Solutions
        </Heading>
        <Text>...</Text>
      </Box>

      <Box>
        <Heading as="h2" size="md" mb={2}>
          CAD Model
        </Heading>
        <Box className="fusion-360-window" mb={4}>
          <iframe src="https://my-fusion-360-project.com/embed"></iframe>
        </Box>
      </Box>

      <Box>
        <Heading as="h2" size="md" mb={2}>
          3D Printing and Assembly
        </Heading>
        <video controls>
          <source src="https://my-video.com/video.mp4" type="video/mp4" />
        </video>
      </Box>

      <Box>
        <Heading as="h2" size="md" mb={2}>
          Conclusion
        </Heading>
        <Text>...</Text>
      </Box>
    </VStack>
  </Box>
);

export default ProposalPage;
