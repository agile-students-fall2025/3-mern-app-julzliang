import React, { useState, useEffect } from 'react'
import axios from "axios";

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5002/api/about')
      .then(res => res.json())
      .then(data => setAbout(data))
      .catch(err => console.error('Error fetching about info:', err));
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div>
      <h1>{about.name}</h1>
      <h2>{about.title}</h2>
      <img src={about.imageUrl}
      alt={about.name}
      style={{
        width: '250px',    
        height: '250px',  
        borderRadius: '50%',
        objectFit: 'cover', 
        margin: '1rem 0'
      }}  />
      <h2>{about.bio}</h2>
    </div>
  );
}


export default About;
