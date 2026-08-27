"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchProducts() {
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

      setResults(data.results || []);
    } catch (error) {
      console.error(error);
      setResults([]);
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        color: "#111827",
        padding: "40px 20px"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        <header
          style={{
            marginBottom: "40px"
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              margin: 0,
              fontWeight: 800
            }}
          >
            PCScout
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "18px"
            }}
          >
            ابحث عن قطع الكمبيوتر وقارن الأسعار
          </p>
        </header>

        <section
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px"
            }}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchProducts();
                }
              }}
              placeholder="مثال: RTX 5070 أو Ryzen 7"
              style={{
                flex: 1,
                padding: "16px",
                border: "1px solid #d1d5db",
                borderRadius: "12px",
                fontSize: "16px",
                outline: "none"
              }}
            />

            <button
              onClick={searchProducts}
              disabled={loading}
              style={{
                padding: "0 28px",
                border: "none",
                borderRadius: "12px",
                background: "#111827",
                color: "#ffffff",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              {loading ? "جاري البحث..." : "بحث"}
            </button>
          </div>
        </section>

        <section
          style={{
            marginTop: "30px"
          }}
        >
          {results.length === 0 && !loading && query && (
            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "16px",
                textAlign: "center",
                color: "#6b7280"
              }}
            >
              لا توجد نتائج.
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px"
            }}
          >
            {results.map((product) => (
              <article
                key={product.id}
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "22px",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.06)"
                }}
              >
                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    marginBottom: "8px"
                  }}
                >
                  {product.category}
                </div>

                <h2
                  style={{
                    fontSize: "20px",
                    margin: "0 0 10px"
                  }}
                >
                  {product.name}
                </h2>

                <p
                  style={{
                    color: "#6b7280",
                    marginBottom: "20px"
                  }}
                >
                  {product.brand} · {product.model}
                </p>

                <div
                  style={{
                    background: "#f3f4f6",
                    borderRadius: "12px",
                    padding: "12px",
                    fontSize: "14px"
                  }}
                >
                  {Object.entries(product.specs).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "6px"
                        }}
                      >
                        <span>{key}</span>
                        <strong>{value}</strong>
                      </div>
                    )
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
