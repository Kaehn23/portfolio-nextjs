import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
   return (
      <div>
         <Head>
           <title>Portfolio de Jeremy - Développeur Web</title>
           <meta name="description" content="Découvrez le portfolio de Jeremy, développeur web, incluant ses compétences, projets, et informations de contact." />
           
         </Head>
         <header>
           <Navbar />
         </header>
         <main>
           <Main />
           <About />
           <Skills />
           <Projects />
         </main>
         <footer>
           <Contact />
         </footer>
      </div>
   );
}