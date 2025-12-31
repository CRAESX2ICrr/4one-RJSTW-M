import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-gray-300">
      
      {/* Top divider */}
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Brand (Left) */}
          <div>
            <h2 className="text-2xl font-semibold text-white tracking-wide">
              4ONE
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              4ONE is a modern, mobile-first shopping platform focused on
              clean design and smooth user experience.
            </p>
          </div>

          {/* Empty spacer to push content right */}
          <div className="hidden md:block" />

          {/* Right side: Support + Contact */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                Support
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    Shipping & Returns
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                Contact
              </h3>
              <div className="mt-5 space-y-3 text-sm">
                <p>
                  <span className="text-gray-400">Email:</span>{" "}
                  <a
                    href="mailto:clayton@gmail.com"
                    className="text-white hover:underline"
                  >
                    clayton@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-gray-400">Phone:</span>{" "}
                  <a
                    href="tel:1234567890"
                    className="text-white hover:underline"
                  >
                    1234567890
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} 4ONE. All rights reserved.</p>
          <p>Built with Next.js, React, and MongoDB</p>
        </div>

      </div>
    </footer>
  );
}
