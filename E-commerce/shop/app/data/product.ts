import Wireless from "@/app/public/Wireless Headphones.jpg";
import shoes from "@/app/public/shoes.jpg";
import hat from "@/app/public/hat.jpg";
import coffemashin from "@/app/public/coffemashin.jpg";
import smartwatch from "@/app/public/smartwatch.jpg";
import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  description: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    image: Wireless,
    description: "High-quality wireless headphones with noise cancellation.",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    image: smartwatch,
    description: "Track your fitness and notifications on the go.",
    category: "Wearables",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 69.99,
    image: shoes,
    description: "Comfortable and stylish sneakers for daily wear.",
    category: "Fashion",
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 59.99,
    image: coffemashin,
    description: "Brew fresh coffee with this easy-to-use coffee maker.",
    category: "Home Appliances",
  },
  {
    id: 5,
    name: "hat",
    price: 20.99,
    image: hat,
    description: "Comfortable and stylish ",
    category: "Fashion",
  },
];
