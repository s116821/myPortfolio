import React, { useState, useEffect } from "react";

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
      <div>
        <button onClick={handleClick}>Get message from Django!</button>
        <p>{message}</p>
      </div>
    );
}

export default DjangoDemoPage;