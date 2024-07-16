import React, { useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";

function DjangoDemoPage() {
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      fetch('/api/demo/')
       .then(response => response.json())
       .then(data => setMessage(data.message));
    }, []);
  
    const handleClick = () => {
      fetch('/api/demo/')
       .then(response => response.json())
       .then(data => setMessage(data.message));
    };
  
    return (
      <FullScreenSection
      backgroundColor="#18181b"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      >
        <Heading as="h1" id="django-title">
          Django Endpoint Practice
        </Heading>
        <div>
          <button onClick={handleClick}>Get message from Django!</button>
          <p>{message}</p>
        </div>
      </FullScreenSection> 
    );
}

export default DjangoDemoPage;