import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/file.svg"
            alt="4ONE Logo"
            width={34}
            height={34}
            className="invert"
          />
          <span className="text-2xl font-semibold tracking-wide">
            4ONE
          </span>
        </Link>

        {/* Middle: Nav Links */}
        <div className="flex items-center gap-8 text-sm uppercase tracking-wider">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/catalogue" className="hover:text-gray-300 transition">
            Catalogue
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <Link href="/cart" className="hover:text-gray-300 transition">
            Cart
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-white/30 px-4 py-1.5 text-sm hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
        </div>

      </nav>
    </header>
  );
}
