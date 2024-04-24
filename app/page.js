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
           <meta name="keywords" content="Jeremy, développeur web, portfolio, projets web, compétences en programmation, contact développeur" />
           <meta name="robots" content="index, follow" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="author" content="Jeremy" />
           <meta name="copyright" content="Copyright © 2023 Jeremy" />
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