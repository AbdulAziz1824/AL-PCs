"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchProducts(e) {
    e.preventDefault();

    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}`
      );

      const data = await response.json();

      if (data.success) {
        setResults(data.results || []);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error(error);
      setResults([]);
    }

    setLoading(false);
  }

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        color: "#111827",
      }}
    >
      <header
        style={{
          padding: "22px 30px",
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong style={{ fontSize: "22px" }}>
            PCScout
          </strong>

          <Link
            href="/builder"
            style={{
              textDecoration: "none",
              color: "#fff",
              background: "#111827",
              padding: "10px 18px",
              borderRadius: "9px",
            }}
          >
            PC Builder
          </Link>
        </div>
      </header>

      <section
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "80px 20px 40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "12px",
          }}
        >
          ابحث عن قطع الكمبيوتر
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "18px",
          }}
        >
          قارن المنتجات والأسعار وابنِ جهازك
        </p>

        <form
          onSubmit={searchProducts}
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "35px",
          }}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="مثال: Ryzen 7 7800X3D"
            style={{
              flex: 1,
              padding: "17px",
              border: "1px solid #d1d5db",
              borderRadius: "12px",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              border: "none",
              background: "#111827",
              color: "#fff",
              padding: "0 28px",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            بحث
          </button>
        </form>
      </section>

      <section
        style={{
          maxWidth: "1000px",
          margin: "auto",
          padding: "0 20px 60px",
        }}
      >
        {loading && (
          <div style={{ textAlign: "center" }}>
            جاري البحث...
          </div>
        )}

        {!loading && results.length > 0 && (
          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "15px",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        display: "block",
                        fontSize: "18px",
                      }}
                    >
                      {product.name}
                    </strong>

                    <span
                      style={{
                        color: "#6b7280",
                        fontSize: "14px",
                      }}
                    >
                      {product.brand} · {product.category}
                    </span>
                  </div>

                  <div style={{ textAlign: "left" }}>
                    <strong style={{ fontSize: "20px" }}>
                      {product.cheapest?.price
                        ? `${product.cheapest.price.toLocaleString(
                            "ar-SA"
                          )} ريال`
                        : product.price
                        ? `${product.price.toLocaleString(
                            "ar-SA"
                          )} ريال`
                        : "عرض الأسعار"}
                    </strong>

                    <div
                      style={{
                        color: "#6b7280",
                        fontSize: "12px",
                      }}
                    >
                      عرض التفاصيل ←
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading &&
          query &&
          results.length === 0 && (
            <div
              style={{
                textAlign: "center",
                color: "#6b7280",
                padding: "30px",
              }}
            >
              لا توجد نتائج
            </div>
          )}
      </section>
    </main>
  );
}
