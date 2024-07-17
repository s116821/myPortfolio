import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "3D Printed Proposal Gift",
    description:
      "A glorified jewelry box designed in Fusion 360 and manufactured with my 3D printer by me, so I could \
      propose to my wife.",
    getImageSrc: () => require("../images/proposal_project.jpg"),
  },
  {
    title: "K80 GPU Fan Control via Arduino",
    description:
      "Project to develop runtime code for an Arduino in my workstation that monitors temperatures provided \
      by Python service to control speeds of fans I added.",
    getImageSrc: () => require("../images/workstation.jpg"),
  },
  {
    title: "Obstacle Course Game",
    description:
      "A game I developed in Unity and C# in which the player needs to get to the other side of the arena while \
      avoiding as many collisions as possible.",
    getImageSrc: () => require("../images/obstacle_course.jpg"),
  },
  {
    title: "Django Endpoint Practice",
    description:
      "This is a quick project in which I practiced implementing a couple endpoints via Django that are triggered \
      via buttons 🔥️.",
    getImageSrc: () => require("../images/django.jpg"),
    linkUrl: "/django-demo"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#906406"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            linkUrl={project.linkUrl}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
