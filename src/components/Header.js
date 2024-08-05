import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: steven.sellers@rocketmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/s116821",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/steven-sellers-magentum-dragon/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#353535"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              {
                socials.map((social_item) => 
                  <a href={social_item.url}>
                    <FontAwesomeIcon icon={social_item.icon} size="2x" />
                  </a>)
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#contactme" onClick={handleClick("contactme")}> Contact Me </a>
              <a href="/#projects" onClick={handleClick("projects")}> Projects </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
