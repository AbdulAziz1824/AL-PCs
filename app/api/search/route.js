import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.trim();

    if (!query) {
      return NextResponse.json({
        success: true,
        results: [],
      });
    }

    const { data: products, error } = await supabase
      .from("products")
      .select("*")
      .ilike("name", `%${query}%`)
      .limit(30);

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: "Database error",
        },
        { status: 500 }
      );
    }

    const results = await Promise.all(
      products.map(async (product) => {
        const { data: offers } = await supabase
          .from("offers")
          .select("*")
          .eq("product_id", product.id)
          .eq("available", true)
          .order("price", { ascending: true });

        return {
          ...product,
          offers: offers || [],
          cheapest: offers?.[0] || null,
        };
      })
    );

    return NextResponse.json({
      success: true,
      query,
      results,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}
