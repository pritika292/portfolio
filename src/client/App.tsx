import { Header } from "./sections/Header.js";

// Real sections (Hero, Experience, Stack, Work, Footer) land in Epic 3
// across issues #17 - #30. This shell wires the header + a placeholder
// hero box so the theme toggle and mesh gradient can be eyeballed in dev.
export function App() {
  return (
    <>
      <Header />
      <main className="max-w-page mx-auto px-6">
        <section className="relative min-h-[70vh] flex items-center">
          <div className="hero-mesh" aria-hidden />
          <div className="relative">
            <h1 className="font-display font-semibold text-[clamp(56px,9vw,104px)] leading-[0.95]">
              pritika.studio
            </h1>
            <p className="mt-6 text-muted max-w-content">
              Theme tokens, Geist preload, mesh gradient up. Sections landing across issues #17 —
              #30.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
