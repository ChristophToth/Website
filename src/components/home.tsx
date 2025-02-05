import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
