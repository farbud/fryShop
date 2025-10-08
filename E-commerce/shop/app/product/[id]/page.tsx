"use client";
import { products, Product } from "@/app/data/product";
import { notFound } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: { id: string };
};

export default function ProductPage({ params }: PageProps) {
  const product: Product | undefined = products.find(
    (p) => p.id === parseInt(params.id)
  );
  const { addToCart } = useCart();

  if (!product) return notFound();

  return (
    <main className="min-h-screen p-6 flex flex-col lg:flex-row gap-6">
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-96 object-contain rounded-xl shadow"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {product.description}
          </p>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
          <Link
            href="/"
            className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Back to Store
          </Link>
        </div>
      </div>
    </main>
  );
}
