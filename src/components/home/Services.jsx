"use client";

import {
  Smartphone,
  RefreshCcw,
  Wrench,
  Settings,
  Unlock,
  ShieldCheck,
} from "lucide-react";

export default function EdgeBand() {
  return (
    <div className="relative w-full mt-[250px] border border-red-500 bg-black/40 py-20">
      
      {/* subtle dark overlay to kill brightness */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">

        {/* CARD */}
        <div className="group rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-red-400/40 hover:shadow-[0_0_30px_-10px_rgba(255,0,0,0.4)]">
          <div className="mb-4 inline-flex rounded-lg bg-red-500/15 p-3 text-red-400">
            <Smartphone size={22} />
          </div>
          <h3 className="text-white font-semibold">
            Buy New Phones
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Latest unlocked iPhones and Android devices.
          </p>
        </div>

        <div className="group rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-red-400/40 hover:shadow-[0_0_30px_-10px_rgba(255,0,0,0.4)]">
          <div className="mb-4 inline-flex rounded-lg bg-red-500/15 p-3 text-red-400">
            <RefreshCcw size={22} />
          </div>
          <h3 className="text-white font-semibold">
            Trade-In & Upgrade
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Trade your old device for instant upgrade credit.
          </p>
        </div>

        <div className="group rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-red-400/40 hover:shadow-[0_0_30px_-10px_rgba(255,0,0,0.4)]">
          <div className="mb-4 inline-flex rounded-lg bg-red-500/15 p-3 text-red-400">
            <Wrench size={22} />
          </div>
          <h3 className="text-white font-semibold">
            Phone Repairs
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Screen, battery, and charging repairs done fast.
          </p>
        </div>

        <div className="group rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-red-400/40 hover:shadow-[0_0_30px_-10px_rgba(255,0,0,0.4)]">
          <div className="mb-4 inline-flex rounded-lg bg-red-500/15 p-3 text-red-400">
            <Settings size={22} />
          </div>
          <h3 className="text-white font-semibold">
            Device Setup
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Data transfer, security, and cloud setup included.
          </p>
        </div>

        <div className="group rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-red-400/40 hover:shadow-[0_0_30px_-10px_rgba(255,0,0,0.4)]">
          <div className="mb-4 inline-flex rounded-lg bg-red-500/15 p-3 text-red-400">
            <Unlock size={22} />
          </div>
          <h3 className="text-white font-semibold">
            Carrier Unlocking
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Unlock your phone for use on any network.
          </p>
        </div>

        <div className="group rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-red-400/40 hover:shadow-[0_0_30px_-10px_rgba(255,0,0,0.4)]">
          <div className="mb-4 inline-flex rounded-lg bg-red-500/15 p-3 text-red-400">
            <ShieldCheck size={22} />
          </div>
          <h3 className="text-white font-semibold">
            Warranty & Support
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Optional protection plans and after-sale support.
          </p>
        </div>

      </div>
    </div>
  );
}
