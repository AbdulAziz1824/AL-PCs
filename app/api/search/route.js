import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "AMD Ryzen 7 7800X3D",
    category: "CPU",
    specs: "8 Cores / 16 Threads",
    offers: [
      { store: "Amazon.sa", price: 1299 },
      { store: "Noon", price: 1349 },
      { store: "Trendyol", price: 1280 }
    ]
  },
  {
    id: 2,
    name: "NVIDIA GeForce RTX 5070",
    category: "GPU",
    specs: "12GB GDDR7",
    offers: [
      { store: "Amazon.sa", price: 2399 },
      { store: "Noon", price: 2450 },
      { store: "Trendyol", price: 2315 }
    ]
  }
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.specs.toLowerCase().includes(query)
  );

  return NextResponse.json({
    success: true,
    results
  });
}
