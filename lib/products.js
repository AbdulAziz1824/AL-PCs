import { NextResponse } from "next/server";
import { products } from "@/lib/products";

export const products = [
  {
    id: 1,
    name: "AMD Ryzen 7 7800X3D",
    category: "CPU",
    brand: "AMD",
    model: "7800X3D",
    specs: {
      cores: 8,
      threads: 16,
      socket: "AM5"
    }
  },

  {
    id: 2,
    name: "NVIDIA GeForce RTX 5070",
    category: "GPU",
    brand: "NVIDIA",
    model: "RTX 5070",
    specs: {
      vram: "12GB",
      memory: "GDDR7"
    }
  },

  {
    id: 3,
    name: "Kingston Fury Beast 32GB DDR5",
    category: "RAM",
    brand: "Kingston",
    model: "Fury Beast",
    specs: {
      capacity: "32GB",
      type: "DDR5",
      speed: "6000MHz"
    }
  },

  {
    id: 4,
    name: "Samsung 990 EVO 1TB",
    category: "Storage",
    brand: "Samsung",
    model: "990 EVO",
    specs: {
      capacity: "1TB",
      interface: "NVMe"
    }
  }
];
