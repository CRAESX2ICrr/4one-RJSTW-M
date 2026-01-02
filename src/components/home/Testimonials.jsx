"use client";

export default function Testimonials() {
  return (
    <section className="w-full mt-[250px] mb-[250px]">
      
      {/* IMAGE + OVERLAY CONTAINER */}
      <div className="relative mx-auto w-[85%] h-[1000px] overflow-hidden rounded-3xl bg-fixed bg-center bg-cover">
        
        {/* BACKGROUND IMAGE (LOCAL) */}
        <img
          src="/images/testm.png"
          alt="Workspace with desk and supplies for testimonials"
          className="w-full h-full object-cover brightness-10"
        />

        {/* OVERLAY CONTENT */}
        <div className="absolute inset-0 z-5 flex flex-col items-center justify-start text-center px-6 pt-32">

          <span className="mb-6 inline-block rounded-full border border-orange-300 bg-orange-100/80 px-6 py-2 text-xs font-semibold tracking-widest text-orange-500">
            TESTIMONIAL
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What People Say
          </h2>

          <p className="mt-4 max-w-2xl text-white/80">
            Hear from our satisfied brand partners and customers about their
            experience working with PureSource Foods.
          </p>

          {/* TESTIMONIAL CARDS */}
          <div className="mt-16 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl bg-[rgb(41_14_48)] p-8 text-center shadow-lg">
              <div className="mx-auto mb-6 h-20 w-20 rounded-full border-4 border-orange-500 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Johnson"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                “PureSource Foods transformed our brand with their exceptional co-packing
                services. The quality is outstanding and their food safety standards are
                unmatched.”
              </p>
              <h4 className="mt-6 font-semibold text-white">Sarah Johnson</h4>
              <p className="text-sm text-orange-500">
                Brand Manager, Green Vitality
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-[rgb(41_14_48)] p-8 text-center shadow-lg">
              <div className="mx-auto mb-6 h-20 w-20 rounded-full border-4 border-orange-500 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="Michael Chen"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                “Working with PureSource has been incredible. Their processing facility
                and R&D team helped us launch multiple successful product lines.”
              </p>
              <h4 className="mt-6 font-semibold text-white">Michael Chen</h4>
              <p className="text-sm text-orange-500">
                Founder, Fresh Start Foods
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-[rgb(41_14_48)] p-8 text-center shadow-lg">
              <div className="mx-auto mb-6 h-20 w-20 rounded-full border-4 border-orange-500 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Emily Rodriguez"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                “The smoothies and juices are absolutely delicious. You can really taste
                the quality and freshness. It’s become part of my daily routine.”
              </p>
              <h4 className="mt-6 font-semibold text-white">Emily Rodriguez</h4>
              <p className="text-sm text-orange-500">
                Health & Wellness Coach
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
