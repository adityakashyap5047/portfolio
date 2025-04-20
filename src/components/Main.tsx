import React from "react";
import { Vortex } from "./ui/vortex";
import TypewriterOverrideEffect from "./TypewriterOverrideEffect";

export function Main() {
  return (
    <div className="mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="blue"
        rangeY={800}
        particleCount={1000}
        baseSpeed={1.0}
        baseHue={220}
      >
        <TypewriterOverrideEffect/>
      </Vortex>
    </div>
  );
}
