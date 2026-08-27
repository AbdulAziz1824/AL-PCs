import { NextResponse } from "next/server";
import { products } from "../../../lib/products";


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim().toLowerCase() || "";

  if (!query) {
    return NextResponse.json({
      success: true,
      results: []
    });
  }

  const results = products.filter((product) => {
    const text = [
      product.name,
      product.category,
      product.brand,
      product.model,
      JSON.stringify(product.specs)
    ]
      .join(" ")
      .toLowerCase();

    return text.includes(query);
  });

  return NextResponse.json({
    success: true,
    query,
    results
  });
}
