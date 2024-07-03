import Head from "next/head";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
   return (
      <>
         <Head>
            <title>Portfolio de Jeremy - Développeur Web</title>
            <meta
               name="description"
               content="Découvrez le portfolio de Jeremy, développeur web, incluant ses compétences, projets, et informations de contact."
            />
            <meta
               name="keywords"
               content="j-idev, informatique, Jeremy, iparraguirre, jeremy iparraguirre, développeur, developpeur, freelance, site vitrine, développeur web, portfolio, projets, web, compétences en programmation, contact développeur"
            />
            <meta name="robots" content="index, follow" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta name="author" content="Jeremyy" />
            <meta name="copyright" content="Copyright © 2024 Jeremy" />
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
      </>
   );
}
