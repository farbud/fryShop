"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 shadow-md bg-gray-100 dark:bg-gray-800">
      <Link href="/" className="text-2xl  text-gray-100 font-bold mb-2 sm:mb-0">
        Mini<span className="text-blue-500">Store</span>
      </Link>

      <div className="flex items-center text-gray-100 gap-4 sm:gap-6">
        <Link href="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        <Link href="/cart" className="hover:text-blue-500 transition">
          Cart
        </Link>
        <Link href="/checkout" className="hover:text-blue-500 transition">
          Checkout
        </Link>
        <Link href="/invoice" className="hover:text-blue-500 transition">
          Invoice
        </Link>
        <Link href="/success" className="hover:text-blue-500 transition">
          Success
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
