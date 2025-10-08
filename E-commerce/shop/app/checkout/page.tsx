"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(
      "checkoutData",
      JSON.stringify({ ...form, cart, total })
    );
    router.push("/invoice");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center dark:text-white">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
          />

          <div className="border-t pt-4 mt-6">
            <h2 className="text-lg font-semibold mb-2 dark:text-gray-100">
              Your Cart
            </h2>
            {cart.length === 0 ? (
              <p className="dark:text-gray-300">Your cart is empty.</p>
            ) : (
              <ul className="space-y-2">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between dark:text-gray-200"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-between mt-4 font-semibold dark:text-white">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg mt-6 hover:bg-blue-700 transition"
          >
            Continue to Invoice
          </button>
        </form>
      </div>
    </div>
  );
}
