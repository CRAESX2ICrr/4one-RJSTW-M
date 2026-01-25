"use client";

export default function Featured() {
  return (
    <section className="w-full mt-32 mb-24">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 space-y-10">

        {/* Top banner */}
        <div
          className="h-20 rounded-2xl bg-cover bg-center p-8 flex items-center justify-between shadow-lg transition-transform duration-500 hover:scale-[1.01]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="bg-neutral-900/70 backdrop-blur-md rounded-lg px-6 py-3 text-white">
            <h3 className="text-xl font-bold">Featured Campaign</h3>
            <p className="mt-1 text-sm text-white/80">
              Limited deals on premium unlocked devices.
            </p>
          </div>

          <button className="rounded-md bg-black/80 px-5 py-3 text-sm font-semibold text-white hover:bg-black hover:-translate-y-0.5 hover:shadow-lg transition-all">
            Learn More
          </button>
        </div>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-[3.5fr_1fr]">


          {/* Main feature */}
          <div
            className="relative rounded-2xl bg-cover bg-center p-12 text-white shadow-xl transition-transform duration-500 hover:scale-[1.01]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=1600&q=80')",
              minHeight: "520px",
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-neutral-900/70 backdrop-blur-sm" />

            <div className="relative max-w-2xl rounded-xl bg-neutral-900/70 backdrop-blur-md p-8">
              <h2 className="text-3xl font-bold">
                Flagship Phones, Better Prices
              </h2>

              <p className="mt-4 text-base text-white/90">
                Discover the latest iPhone and Android models — unlocked,
                warranty-backed, and ready to ship.
              </p>

              <button className="mt-6 rounded-md bg-orange-500 px-6 py-3 font-semibold text-black hover:bg-orange-400 hover:-translate-y-0.5 hover:shadow-lg transition-all">
                Explore Devices
              </button>
            </div>
          </div>

          {/* Side panel */}
          <div
            className="relative rounded-2xl bg-cover bg-center p-10 text-white shadow-xl flex flex-col justify-center transition-transform duration-500 hover:scale-[1.01]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80')",
              minHeight: "560px",
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-neutral-900/75 backdrop-blur-sm" />

            <div className="relative">
              <h4 className="text-2xl font-semibold">Trade-In & Upgrade</h4>
              <p className="mt-3 text-sm text-white/80">
                Upgrade your phone and get instant value for your old device.
              </p>

              <button className="mt-6 rounded-md bg-orange-500 px-6 py-3 font-medium text-black hover:bg-orange-400 hover:-translate-y-0.5 hover:shadow-lg transition-all">
                Check Value
              </button>

              <div className="mt-6 text-xs text-white/60">
                Trusted by thousands of customers
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
