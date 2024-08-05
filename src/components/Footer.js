import React from "react";
import {Box, Flex, Link} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

const portfolioGitUrl = "https://github.com/s116821/myPortfolio";

const Footer = () => {
  return (
    <Box backgroundColor="#353535">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>
            <Link href={portfolioGitUrl} isExternal>
              Made by Steven Sellers  <ExternalLinkIcon mx='2px' />
            </Link>
            {" "}
            • Website powered by ReactJS and AWS EC2 & S3 
            • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
