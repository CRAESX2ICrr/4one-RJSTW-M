"use client";

import React from "react";

export default function Featured() {
  return (
    <section className="w-full mt-32 mb-32">
      <div className="mx-auto w-[92%] max-w-7xl space-y-8">

        {/* Top long rectangle */}
        <div
          className="h-20 rounded-2xl bg-cover bg-center p-8 flex items-center justify-between shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="bg-black/60 rounded-lg px-6 py-3 text-white">
            <h3 className="text-xl font-extrabold">
              Featured Campaign
            </h3>
            <p className="mt-1 text-sm text-white/80">
              Limited deals on premium unlocked devices.
            </p>
          </div>

          <button className="rounded-md bg-black/90 px-5 py-3 text-sm font-semibold text-white hover:bg-black">
            Learn More
          </button>
        </div>

        {/* Main + Side */}
        <div className="grid gap-8 lg:grid-cols-4">

          {/* MAIN FEATURE */}
          <div
            className="relative col-span-3 rounded-2xl bg-cover bg-center p-10 text-white shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=1600&q=80')",
              minHeight: "520px",
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-black/60" />

            <div className="relative max-w-2xl rounded-lg bg-black/60 p-6">
              <h2 className="text-3xl font-bold">
                Flagship Phones, Better Prices
              </h2>

              <p className="mt-3 text-base text-white/90">
                Discover the latest iPhone and Android models — unlocked,
                warranty-backed, and ready to ship.
              </p>

              <button className="mt-6 rounded-md bg-orange-500 px-5 py-3 font-semibold text-black hover:bg-orange-400">
                Explore Devices
              </button>
            </div>
          </div>

          {/* TALL SIDE PANEL */}
          <div
            className="relative rounded-2xl bg-cover bg-center p-8 text-white shadow-lg flex flex-col justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80')",
              minHeight: "560px",
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-black/70" />

            <div className="relative">
              <h4 className="text-2xl font-semibold">
                Trade-In & Upgrade
              </h4>

              <p className="mt-3 text-sm text-white/80">
                Upgrade your phone and get instant value for your old device.
              </p>

              <button className="mt-6 rounded-md bg-orange-500 px-5 py-3 text-black font-medium hover:bg-orange-400">
                Check Value
              </button>

              <div className="mt-6 text-xs text-white/60">
                Trusted by thousands of customers
              </div>
            </div>
          </div>
        </div>

        {/* Bottom three promos */}
        <div className="grid gap-8 md:grid-cols-3">

          <div
            className="h-36 rounded-2xl bg-cover bg-center p-6 text-white shadow-lg flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80')",
            }}
          >
            <div className="bg-black/70 rounded-md px-5 py-3 text-center">
              <div className="font-semibold">
                Free Fast Shipping
              </div>
              <div className="mt-1 text-sm text-white/80">
                On all orders
              </div>
            </div>
          </div>

          <div
            className="h-36 rounded-2xl bg-cover bg-center p-6 text-white shadow-lg flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=900&q=80')",
            }}
          >
            <div className="bg-black/70 rounded-md px-5 py-3 text-center">
              <div className="font-semibold">
                Secure Payments
              </div>
              <div className="mt-1 text-sm text-white/80">
                Trusted checkout
              </div>
            </div>
          </div>

          <div
            className="h-36 rounded-2xl bg-cover bg-center p-6 text-white shadow-lg flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80')",
            }}
          >
            <div className="bg-black/70 rounded-md px-5 py-3 text-center">
              <div className="font-semibold">
                Warranty Included
              </div>
              <div className="mt-1 text-sm text-white/80">
                Buy with confidence
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
