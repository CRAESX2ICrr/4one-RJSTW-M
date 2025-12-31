"use client";

import LightPillar from "@/components/LightPillar";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <LightPillar
        topColor="#5227FF"
        bottomColor="#FF9FFC"
        intensity={0.6}
        rotationSpeed={0.25}
        glowAmount={0.004}
        pillarWidth={3.0}
        pillarHeight={0.4}
        noiseIntensity={0.4}
        interactive={false}
        mixBlendMode="normal"
      />
    </div>
  );
}
