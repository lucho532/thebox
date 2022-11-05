import React from "react";
import Header from "../component/header/Header";
import Banner from "../component/banner/Banner";
import Reputation from "../component/reputation/Reputation";
import About from "../component/about/About";
import Services from "../component/servicess/Services";
import Experience from "../component/experience/Experience";
import Consultation from "../component/consultation/Consultation";
const Index = () => {
  return (
    <section>
      <Header />
      <Banner />
      <Reputation />
      <About />
      <Services />
      <Experience />
      <Consultation />
    </section>
  );
};

export default Index;
