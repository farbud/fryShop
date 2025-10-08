"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface CheckoutData {
  name: string;
  email: string;
  address: string;
  total: number;
  cart: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
}

export default function InvoicePage() {
  const router = useRouter();
  const [data, setData] = useState<CheckoutData | null>(null);

  useEffect(() => {
    const checkoutData = localStorage.getItem("checkoutData");
    if (checkoutData) {
      setData(JSON.parse(checkoutData));
    } else {
      router.push("/checkout");
    }
  }, [router]);

  if (!data) return null;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          🧾 Invoice Summary
        </h1>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl mb-6">
          <p className="text-gray-700 dark:text-gray-200">
            <strong>Name:</strong> {data.name}
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            <strong>Email:</strong> {data.email}
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            <strong>Address:</strong> {data.address}
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            <strong>Date:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">
            Items
          </h2>
          <ul className="space-y-3">
            {data.cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm"
              >
                <span className="dark:text-gray-200">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-semibold dark:text-gray-100">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-6 text-lg font-semibold dark:text-white">
            <span>Total:</span>
            <span>${data.total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => router.push("/success")}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl mt-8 transition"
        >
          ✅ Confirm & Pay
        </button>
      </div>
    </div>
  );
}
