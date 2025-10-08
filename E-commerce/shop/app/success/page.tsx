"use client";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Payment Successful✅
      </h1>
      <p className="text-gray-600 mb-6">
        your order has been placed successfully
      </p>

      <Link
        href="/"
        className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
      >
        Back to home
      </Link>
    </div>
  );
}
