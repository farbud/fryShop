"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <main className="min-h-screen p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Store
        </Link>
      </main>
    );

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between border border-gray-300 dark:border-gray-700 p-4 rounded-xl shadow"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-contain rounded-lg mb-4 sm:mb-0"
            />
            <div className="flex-1 sm:ml-6 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                ${item.price} × {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition mt-2 sm:mt-0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link
            href="/checkout"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Checkout
          </Link>
          <button
            onClick={clearCart}
            className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </main>
  );
}
