import { Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, linkUrl }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack>
      <Image src={imageSrc} alt={title} />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <HStack>
        <Text>Learn more</Text>
        <Link href={linkUrl} isExternal>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </HStack>
    </VStack>
  );
};

export default Card;
