import React from 'react'
import { Link } from "react-router-dom";

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


    </div>
  )
}

export default Home