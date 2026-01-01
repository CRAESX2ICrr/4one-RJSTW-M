"use client";

import {
  UserRoundPen,
  ShoppingCart,
  Heart,
  Bell,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
          cache: "no-store",
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Auth check failed", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [pathname]);

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

          {/* Cart (always visible) */}
          <Link
            href="/cart"
            className="hover:text-purple-400 transition"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
          </Link>

          {!loading && user && (
            <>
              {/* Notifications */}
              <Link
                href="/profile/notifications"
                className="hover:text-purple-400 transition"
                aria-label="Notifications"
              >
                <Bell size={22} />
              </Link>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="hover:text-purple-400 transition"
                aria-label="Wishlist"
              >
                <Heart size={22} />
              </Link>

              {/* Profile + Greeting */}
              <Link
                href="/profile"
                className="flex items-center gap-3 hover:text-purple-400 transition"
                aria-label="Profile"
              >
                <UserRoundPen size={22} />
                <span className="text-sm text-white/80">
                  Hi {user.displayName}
                </span>
              </Link>

            </>
          )}

          {!loading && !user && (
            <Link
              href="/login"
              className="rounded-md border border-white/30 px-4 py-1.5 text-sm hover:bg-white hover:text-black transition"
            >
              Login
            </Link>
          )}
        </div>

      </nav>
    </header>
  );
}
