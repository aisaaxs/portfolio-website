import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";
import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";
import Experience from "@/src/components/sections/Experience";
import Photography from "@/src/components/sections/Photography";
import Projects from "@/src/components/sections/Projects";
import Resume from "@/src/components/sections/Resume";

// Compose the single-page portfolio in the same order used by the navigation.
export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex min-h-screen w-full flex-col pt-20 outline-none">
        <h1 className="sr-only">
          Anitej Isaac Sharma — Software Developer Portfolio
        </h1>
        <About />
        <Resume />
        <Projects />
        <Experience />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
