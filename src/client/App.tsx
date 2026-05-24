import { Header } from "./sections/Header.js";
import { Hero } from "./sections/Hero.js";
import { Contact } from "./sections/Contact.js";
import { Experience } from "./sections/Experience/index.js";
import { Education } from "./sections/Education/index.js";
import { Stack } from "./sections/Stack.js";
import { SidePane } from "./sections/SidePane.js";
import { Footer } from "./sections/Footer.js";
import { useVisitBeacon } from "./lib/visitBeacon.js";

// Two-column layout above the footer: main content on the left
// (Hero -> Experience -> Stack), sticky side pane on the right (live
// shipping pulse + project cards). On <1024px the grid collapses to a
// single column and the side pane renders inline right after Hero so the
// projects are still visible early in the scroll.
export function App() {
  useVisitBeacon();
  return (
    <>
      <Header />
      <div className="page-grid max-w-page mx-auto px-6">
        <div className="page-grid__hero fr-fade-up">
          <Hero />
        </div>
        <div className="page-grid__side fr-fade-up fr-delay-2">
          <SidePane />
        </div>
        <div className="page-grid__main fr-fade-up fr-delay-1">
          <Contact />
          <Experience />
          <Education />
          <Stack />
        </div>
      </div>
      <Footer />
    </>
  );
}
