import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <img src="./img/sauce.png"/>
        <img src="./img/combo.png"/>
        <img src="./img/dessert.png"/>
        <img src="./img/hot-dog.png"/>
        <img src="./img/pizza.png"/>
      <div>Click button to go Home page</div>
      <button>
        <Link to="/">Home Page</Link>
      </button>
      
    </>
  );
};

export default About;
