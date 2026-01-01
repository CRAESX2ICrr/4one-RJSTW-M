"use client";

import { useState } from "react";

const hoverColors = [
  "#a855f7", // purple
  "#22c55e", // green
  "#3b82f6", // blue
  "#f97316", // orange
  "#ec4899", // pink
  "#14b8a6", // teal
];

function HoverGlow({ children, className }) {
  const [color, setColor] = useState(null);
  const [hovered, setHovered] = useState(false);

  const randomizeColor = () => {
    const random =
      hoverColors[Math.floor(Math.random() * hoverColors.length)];
    setColor(random);
  };

  return (
    <div
      onMouseEnter={() => {
        randomizeColor();
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? color : "rgba(255,255,255,0.1)",
        boxShadow: hovered ? `0 0 22px ${color}55` : "none",
      }}
      className={`
        border
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-24 text-white flex flex-col items-center gap-10">

      {/* MAIN CONTENT */}
      <div className="flex flex-col gap-6">

        {/* Top pill */}
        <HoverGlow className="w-[50rem] h-40 rounded-full bg-black/80 flex items-center px-12">
          <h1 className="text-4xl font-semibold tracking-tight">
            About Our Phone Store
          </h1>
        </HoverGlow>

        {/* Bottom section */}
        <div className="flex gap-6">

          {/* Left column */}
          <div className="flex flex-col gap-6">

            <HoverGlow className="w-[24rem] h-80 rounded-3xl bg-black/80 p-8 flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-4">Who We Are</h2>
              <p className="text-sm text-white/80">
                We are a modern phone retailer focused on delivering trusted
                devices with fair pricing and fast delivery.
              </p>
            </HoverGlow>

            <HoverGlow className="w-[24rem] h-80 rounded-3xl bg-black/80 p-8 flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-4">What We Sell</h2>
              <p className="text-sm text-white/80">
                Brand-new and certified phones, accessories, and essentials —
                all tested and backed by warranty.
              </p>
            </HoverGlow>

          </div>

          {/* Right tall box */}
          <HoverGlow className="w-[24rem] h-[41.5rem] rounded-3xl bg-black/80 p-10 flex flex-col gap-40">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Why Choose Us</h2>
              <ul className="space-y-4 text-sm text-white/80">
                <li>• Genuine phones only</li>
                <li>• Transparent pricing</li>
                <li>• Fast shipping</li>
                <li>• Reliable support</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold mb-3">Our Promise</h3>
              <p className="text-sm text-white/70">
                Every device is carefully inspected, rigorously tested, and thoughtfully
                packaged to meet our quality standards. We focus on durability, performance,
                and presentation to ensure long-term reliability and trust with every order.
              </p>
            </div>
          </HoverGlow>

        </div>
      </div>

      {/* CREATOR / PROFILE PILL */}
      <HoverGlow className="w-[65rem] h-52 rounded-full bg-black/80 flex items-center px-12 gap-10">

        <div className="w-32 h-32 rounded-full bg-black/70 flex items-center justify-center">
          <span className="text-2xl font-semibold text-white/70">CP</span>
        </div>

        <div className="flex-1 h-28 rounded-full bg-black/70 flex items-center px-10">
          <p className="text-sm text-white/80 leading-relaxed">
            Founded by a tech enthusiast with a passion for smartphones and clean,
            intentional design, this store was built to remove confusion from
            phone buying and replace it with trust, clarity, and quality.
          </p>
        </div>

      </HoverGlow>

    </div>
  );
}
