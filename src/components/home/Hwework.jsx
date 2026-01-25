"use client";

import React from "react";

const steps = [
  {
    id: 1,
    title: "Discovery",
    desc: "We learn your goals, constraints, and timeline.",
  },
  {
    id: 2,
    title: "Concept",
    desc: "Sketch ideas and validate direction with prototypes.",
  },
  {
    id: 3,
    title: "Build",
    desc: "Develop, test and refine until it's ready to ship.",
  },
  {
    id: 4,
    title: "Launch",
    desc: "Deploy, monitor and iterate with your team.",
  },
];

export default function Hwework() {
  return (
<section
  className="relative w-full mt-[100px] py-20 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
  }}
>

      {/* dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/85" />

      <div className="relative mx-auto max-w-6xl px-6 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-sm font-semibold tracking-widest text-teal-300">
            HOW WE WORK
          </h3>
          <h2 className="mt-3 text-3xl font-bold">Our Simple Process</h2>
          <p className="mt-2 text-white/80">
            A clear, repeatable approach that keeps projects on track and
            delivers measurable results.
          </p>
        </div>

        {/* Steps flow */}
        <div className="mt-12">
          {/* Horizontal on md+, vertical on small */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
            {steps.map((s, idx) => (
              <div key={s.id} className="flex w-full flex-col items-center md:items-start md:w-1/4">
                {/* circle + arrow row */}
                <div className="flex items-center">
                  {/* Circle */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-black shadow-lg">
                    <span className="font-bold text-lg">{s.id}</span>
                  </div>

                  {/* Arrow (show on md only, pointing right) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block">
                      <svg
                        className="ml-4 h-6 w-12 text-white/60"
                        viewBox="0 0 100 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path d="M0 12 L86 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M70 3 L86 12 L70 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Description card under circle */}
                <div className="mt-4 w-full text-center md:text-left">
                  <div className="rounded-lg bg-white/6 px-4 py-3">
                    <div className="text-lg font-semibold text-white">{s.title}</div>
                    <div className="mt-2 text-sm text-white/80">{s.desc}</div>
                  </div>
                </div>

                {/* Vertical connector for small screens (arrow down) */}
                {idx < steps.length - 1 && (
                  <div className="mt-4 md:hidden flex items-center">
                    <svg
                      className="h-8 w-8 text-white/60"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}