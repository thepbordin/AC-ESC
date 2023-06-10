import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import RegisterDetails from "../components/RegisterDetails";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Timeline/>
      <RegisterDetails/>
    </> 
  );
}
