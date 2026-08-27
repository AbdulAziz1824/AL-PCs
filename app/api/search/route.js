import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "AMD Ryzen 7 7800X3D",
    category: "CPU",
    specs: "8 Cores / 16 Threads",
    stores: [
      {
        name: "Amazon.sa",
        price: 1299,
        url: "#",
      },
      {
        name: "Noon",
        price: 1349,
        url: "#",
      },
      {
        name: "Trendyol",
        price: 1280,
        url: "#",
      },
    ],
  },

  {
    id: 2,
    name: "NVIDIA GeForce RTX 5070",
    category: "GPU",
    specs: "12GB GDDR7",
    stores: [
      {
        name: "Amazon.sa",
        price: 2399,
        url: "#",
      },
      {
        name: "Noon",
        price: 2450,
        url: "#",
      },
      {
        name: "Trendyol",
        price: 2315,
        url: "#",
      },
    ],
  },

  {
    id: 3,
    name: "Kingston Fury 32GB DDR5 6000",
    category: "RAM",
    specs: "2x16GB / 6000MHz",
    stores: [
      {
        name: "Amazon.sa",
        price: 399,
        url: "#",
      },
      {
        name: "Noon",
        price: 429,
        url: "#",
      },
      {
        name: "Trendyol",
        price: 379,
        url: "#",
      },
    ],
  },

  {
    id: 4,
    name: "Samsung 990 EVO 1TB",
    category: "Storage",
    specs: "PCIe 4.0 NVMe",
    stores: [
      {
        name: "Amazon.sa",
        price: 329,
        url: "#",
      },
      {
        name: "Noon",
        price: 349,
        url: "#",
      },
      {
        name: "Trendyol",
        price: 309,
        url: "#",
      },
    ],
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q")?.trim().toLowerCase();

  if (!query) {
    return NextResponse.json({
      success: true,
      results: [],
    });
  }

  const results = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.specs.toLowerCase().includes(query)
    );
  });

  const formattedResults = results.map((product) => {
    const cheapest = [...product.stores].sort(
      (a, b) => a.price - b.price
    )[0];

    return {
      ...product,
      cheapest,
    };
  });

  return NextResponse.json({
    success: true,
    query,
    results: formattedResults,
  });
}
