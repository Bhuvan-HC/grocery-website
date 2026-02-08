import { useState } from "react";
import Intro from "./Intro";
import Landing from "./Landing";

export default function Home() {
  const [step, setStep] = useState("intro");

  return (
    <>
      {step === "intro" && (
        <Intro onExplore={() => setStep("landing")} />
      )}

      {step === "landing" && <Landing />}
    </>
  );
}