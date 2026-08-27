import { NextResponse } from "next/server";
import { products } from "@/lib/products";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q")?.trim().toLowerCase() || "";

  if (!query) {
    return NextResponse.json({
      success: true,
      results: []
    });
  }

  const words = query.split(/\s+/).filter(Boolean);

  const results = products
    .map((product) => {
      const searchableText = [
        product.name,
        product.category,
        product.brand,
        product.model,
        JSON.stringify(product.specs)
      ]
        .join(" ")
        .toLowerCase();

      const matchedWords = words.filter((word) =>
        searchableText.includes(word)
      );

      const offers = [...product.offers].sort(
        (a, b) => a.price - b.price
      );

      return {
        ...product,
        offers,
        cheapest: offers[0],
        score: matchedWords.length
      };
    })
    .filter((product) => product.score > 0)
    .sort((a, b) => b.score - a.score);

  return NextResponse.json({
    success: true,
    query,
    results
  });
}
