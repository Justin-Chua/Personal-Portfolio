import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
};

export default Page;