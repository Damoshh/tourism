import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/filter.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div 
        className = "headerContainer" 
      >
        <h1>Hai</h1>
        <p>eat</p>
        <Link to="/about">
          <button>ORDE NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home
