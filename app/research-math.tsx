"use client";

import { useMemo } from "react";
import katex from "katex";
import type { ResearchEquation } from "./holography-visuals";

export default function ResearchMath({
  equation,
  locale,
}: {
  equation: ResearchEquation;
  locale: "en" | "zh";
}) {
  const html = useMemo(
    () => katex.renderToString(equation.latex, {
      displayMode: true,
      output: "htmlAndMathml",
      throwOnError: true,
      strict: "error",
      trust: false,
    }),
    [equation.latex],
  );

  return (
    <div className="research-equation" id={`equation-${equation.id}`}>
      <h5>{equation.title[locale]}</h5>
      <div
        className="math-scroll"
        role="group"
        aria-label={equation.title[locale]}
        tabIndex={0}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <p className="math-description">{equation.description[locale]}</p>
      {equation.notation && <p className="math-notation">{equation.notation[locale]}</p>}
    </div>
  );
}
