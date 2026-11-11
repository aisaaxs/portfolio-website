import Navbar from "@/src/components/navbar";
import About from "@/src/components/about";
import Projects from "@/src/components/projects";
import Experience from "@/src/components/experience";
import Photography from "@/src/components/photography";
import Notebook from "@/src/components/notebook";
import CurrentlyExploring from "@/src/components/currently-exploring";
import LetsTalk from "@/src/components/lets-talk";
import Footer from "@/src/components/footer";

export default function Portfolio() {
  return (
    <main id="scroll-container" className="relative w-screen h-screen flex flex-col pt-20 overflow-y-auto">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Photography />
      <Notebook />
      <CurrentlyExploring />
      <LetsTalk />
      <Footer />
    </main>
  );
}
