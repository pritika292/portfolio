import { Header } from "./sections/Header.js";
import { Hero } from "./sections/Hero.js";
import { Experience } from "./sections/Experience/index.js";
import { Stack } from "./sections/Stack.js";
import { Work } from "./sections/Work.js";
import { Footer } from "./sections/Footer.js";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Stack />
        <Work />
      </main>
      <Footer />
    </>
  );
}
