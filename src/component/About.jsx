import React from 'react';
import Header from './Header';
//import './About.css'; // Assuming you have a separate CSS file for styling

export default function About() {
  return (
    <div>
      <Header />
      <header className="about-container">
        <h1 style={{color:'aqua'}}>About My Booksite Website</h1>

        <p>
          Welcome to My Booksite, a platform dedicated to the world of literature and the joy of reading.
        </p>

        <p>
          Our mission is to provide a curated collection of books that cater to diverse tastes and interests. Whether you are a seasoned reader or just starting your reading journey, My Booksite offers a wide range of genres and authors to explore.
        </p>

        <p>
          Discover new stories, immerse yourself in captivating narratives, and connect with fellow book enthusiasts. My Booksite is more than just a website; it's a community that celebrates the magic of books and the shared love for storytelling.
        </p>
      </header>
    </div>
  );
}
