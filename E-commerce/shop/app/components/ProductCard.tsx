import { Product } from "@/app/data/product";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-4 shadow hover:shadow-lg transition flex flex-col">
      <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mt-1">
        {product.description}
      </p>
      <p className="font-bold mt-2">${product.price}</p>
      <Link
        href={`/product/${product.id}`}
        className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}
