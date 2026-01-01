"use client";

export default function Contact() {
  return (
    <section className="w-full mt-[0px] mb-[250px]">
      <div
      className="relative mx-auto w-[85%] h-[1000px] overflow-hidden rounded-3xl bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/90" />

        {/* OVERLAY CONTENT — z-5 */}
        <div className="absolute inset-0 z-5 px-12 pt-32">

          {/* TOP TEXT (CENTERED) */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-6 inline-block rounded-full border border-teal-300 bg-teal-100/10 px-6 py-2 text-xs font-semibold tracking-widest text-teal-300">
              GET IN TOUCH
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Visit Us or Reach Out
            </h2>

            <p className="mt-4 text-white/80">
              Connect with our team through any of the channels below. We&apos;re
              here to help bring your food &amp; beverage vision to life.
            </p>
          </div>

          {/* MAP ROW (BELOW TEXT, RIGHT SIDE) */}
<div className="mt-20 flex w-full justify-end pr-24">

<div className="w-full max-w-xl overflow-hidden rounded-2xl shadow-xl">

              <iframe
                src="https://www.google.com/maps?q=Googleplex&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
