import React from "react";
import HomeHow from "../components/Home-howitworks";
import HomeJoin from "../components/HomeJoin";
import HomeNewsletter from "../components/HomeNewsletter";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ElseKnow from "../components/ElseKnow";
import Thrive from "../components/Thrive";
import NextUp from "../components/NextUp";

const Home = () => {  
  return (
    <>
      <NextUp />
      <Thrive />
      <ElseKnow />
      <FAQ />
      <HomeNewsletter />
      <HomeJoin />
      <HomeHow />
      <Footer />
    </>
  );
};

export default Home;
