import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
   return (
      <div>
         <title>Jeremy's Portfolio</title>
         <meta name="description" content="Jeremy's Portfolio" />
         <Navbar />
         <Main />
         <About />
         <Skills />
         <Projects />         
         <Contact />

      </div>
   );
}
