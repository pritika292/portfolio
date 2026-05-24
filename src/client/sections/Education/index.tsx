import { useState } from "react";
import { CompanyRow } from "../../components/CompanyRow.js";
import { UtdLogo, ManipalLogo } from "./logos.js";
import { UtdContent } from "./Utd.js";
import { ManipalContent } from "./Manipal.js";

type SchoolId = "utd" | "manipal";

// Mirrors the Experience accordion shape. Two rows, single-open, click to
// expand. Uses the same CompanyRow component (the name is internal -- a row
// is a row regardless of whether it's an employer or a school).
export function Education() {
  const [openId, setOpenId] = useState<SchoolId | null>(null);
  const toggle = (id: SchoolId) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <section id="education" className="pt-8 pb-16 md:pt-10 md:pb-24 border-t border-border">
      <h2 className="section-heading">Education</h2>
      <ul className="mt-10 border-t border-border list-none p-0">
        <CompanyRow
          id="utd"
          name="UT DALLAS"
          logo={<UtdLogo />}
          latestTitle="MS Computer Science"
          dates="2022 - 2024"
          location="Richardson, TX"
          summary="Master of Science in Computer Science. 3.88 / 4.0 GPA. Funded alongside the Paycom internship."
          isOpen={openId === "utd"}
          onToggle={() => toggle("utd")}
        >
          <UtdContent />
        </CompanyRow>
        <CompanyRow
          id="manipal"
          name="MANIPAL"
          logo={<ManipalLogo />}
          latestTitle="BTech Computer Science"
          dates="2016 - 2020"
          location="Manipal, India"
          summary="Bachelor of Technology in Computer Science. 9.02 / 10 GPA. Top CS program in the region."
          isOpen={openId === "manipal"}
          onToggle={() => toggle("manipal")}
        >
          <ManipalContent />
        </CompanyRow>
      </ul>
    </section>
  );
}
