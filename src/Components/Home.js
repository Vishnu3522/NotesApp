import React from 'react'
// import { Link } from "react-router-dom";

import './Home.css';


function Home() {
  return (
    <div>
      <nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="contact">Contact Us</a></li>
  </ul>
</nav>
<div className='banner'>
  <div
    style={{
      position: "relative",
      width: "100%",
      height: 0,
      paddingTop: "75.0000%",
      paddingBottom: 0,
      boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
      marginTop: "1.6em",
      marginBottom: "0.9em",
      overflow: "hidden",
      borderRadius: 8,
      willChange: "transform"
    }}
  >
    <iframe
      loading="lazy"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        border: "none",
        padding: 0,
        margin: 0
      }}
      src="https://www.canva.com/design/DAFiD-Q86LE/view?embed"
    ></iframe>
    </div>
    </div>
    </div>

  )
}

export default Home