import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import React, { useState } from "react";

const Page = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <Skills></Skills>
    </div>
  )
};

export default Page;