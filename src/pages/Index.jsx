import React from "react";
import Header from "../component/header/Header";
import Banner from "../component/banner/Banner";
import Reputation from "../component/reputation/Reputation";
import About from "../component/about/About";
import Services from "../component/servicess/Services";
import Experience from "../component/experience/Experience";
import Consultation from "../component/consultation/Consultation";
import Projects from "../component/projectss/Projects";
import Login from "../component/login/Login";
import Footer from "../component/footer/Footer";
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
      <Projects />
      <Login />
      <Footer />
    </section>
  );
};

export default Index;
