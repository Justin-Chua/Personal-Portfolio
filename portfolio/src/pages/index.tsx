import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import React, { useState } from "react";

const Page = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
    </div>
  )
};

export default Page;