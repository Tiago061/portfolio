import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Recommendations from "./components/recommendations";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Recommendations />
      </main>
      <Footer />
    </>
  );
}
