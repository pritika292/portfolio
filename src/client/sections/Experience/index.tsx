import { PaycomSwe } from "./PaycomSwe.js";
import { PaycomIntern } from "./PaycomIntern.js";
import { VmwareSwe } from "./VmwareSwe.js";
import { VmwareIntern } from "./VmwareIntern.js";
import { MicrosoftIntern } from "./MicrosoftIntern.js";

export function Experience() {
  return (
    <section id="experience" className="max-w-page mx-auto px-6 py-24 md:py-32">
      <h2 className="section-heading">Experience</h2>
      <div className="mt-12 max-w-content space-y-24">
        <PaycomSwe />
        <PaycomIntern />
        <VmwareSwe />
        <VmwareIntern />
        <MicrosoftIntern />
      </div>
      <p className="mt-16 max-w-content text-[14px] text-muted italic leading-relaxed">
        University of Texas at Dallas — MS Computer Science, 3.88 GPA (2022 – 2024) · Manipal
        Institute of Technology — BTech Computer Science, 9.02/10 (2016 – 2020)
      </p>
    </section>
  );
}
