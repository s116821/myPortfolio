import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
  ChakraProvider,
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
import RingsImage from "../images/rings_new.jpeg";
import FinishedProjectVid from "../videos/finished_proposal_proj.mov";

const ProposalPage = () => (
  <ChakraProvider>
    <FullScreenSection
    backgroundColor="#353535"
    isDarkBackground
    p={8}
    alignItems="flex-start"
    spacing={8}
    >
      <Box p={4}>
        <VStack spacing={8} >
          <Box alignItems='center' textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              Proposal Jewelry Box
            </Heading>
            <Text mb={4}>A personal project that I worked on for about a year in 2020 in order to propose to my significant other.  Spoiler: It worked.</Text>
          </Box>
          <Image src={RingsImage} alt="Rings Image" borderRadius='40' objectFit='cover' boxSize='350px'/>
          <Box>
            <Heading as="h2" size="md" mb={2}>
              Motivation
            </Heading>
            <Text>The primary motivation for this project was simple.  
              I loved my then-girlfriend-now-wife so much that I was certain that I wanted to make the ultimate commitment to her, 
              BUT I had to do it in a way that reflected who I was.  At the time of the initial motivation for this project, I considered myself a pretty decent engineer and physicist, so
              I thought it'd be grand to personally design & make a beautified mechanical contraption that would present the proposal ring to her.
              Admittedly, I had actually been brainstorming ideas since shortly after dating her because proposing to someone
              is something I only ever planned to do once and wanted to do it right; but for a while it never went further than these brief brainstorm sessions.  
              For a good laugh, look at the original monstrosity that I dared to 
              call my design sketch at the time (while in college, so 2019ish) for this project:</Text>

              <Text>Very bad, I know.  I've actually recently started trying to practice drawing for the very reason of being able to sketch designs
                more effectively.  Anyways, getting back to the motivation, fast-forward a little bit after these sketches until college graduation (May 2020); and SOMEHOW, I managed to 
                graduate with 2 degrees in 4 years without landing a SINGLE job, and I wouldn't land one, even after vigorously applying, for another year and some change.
                So, bumming it out at my father's house in the mean-time, the stage was set for innovation: I was restless having worked my tail off for 4 straight years and wanted to get back
                to work. I wanted so badly to work on something, ANYTHING.  The light-bulb went off.  I realized it was time to make those nasty sketches a beautiful reality.  The result: a new tool mastered, a new job (for real), and most importantly, a wife of my dreams.  
                I thoroughly enjoyed working on this project, and I hope you thoroughly enjoy reading on about how I did it all.
              </Text>
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
            <video
              controls
              style={{ maxWidth: "60%", margin: "0 auto", muted: true, autoplay: true }}
            >
              <source src={FinishedProjectVid} type="video/mp4" />
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
    </FullScreenSection> 
  </ChakraProvider>
);

export default ProposalPage;
