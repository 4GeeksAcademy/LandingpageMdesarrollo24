import React from "react";
import NavbarComponent from "./Navbar";
import Jumbotron from "./Jumbotron";
import CardGroup from "./Card";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <Jumbotron />
      <CardGroup />
      <Footer />
    </div>
  );
};

export default Home;
