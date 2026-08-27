"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchProducts() {
    const search = query.trim();

    if (!search) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(search)}`
      );

      const data = await response.json();

      setResults(data.results || []);
    } catch (error) {
      console.error(error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        color: "#111827",
        padding: "40px 20px"
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto"
        }}
      >
        <header style={{ marginBottom: "35px" }}>
          <div
            style={{
              fontSize: "14px",
              color: "#6b7280",
              marginBottom: "8px"
            }}
          >
            PC Parts Search
          </div>

          <h1
            style={{
              fontSize: "44px",
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
            ابحث عن قطع الكمبيوتر وقارن أسعار المتاجر
          </p>
        </header>

        <section
          style={{
            background: "#ffffff",
            padding: "22px",
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
              placeholder="ابحث مثل: RTX 5070 أو Ryzen 7 أو DDR5"
              style={{
                flex: 1,
                padding: "16px",
                border: "1px solid #d1d5db",
                borderRadius: "12px",
                fontSize: "16px"
              }}
            />

            <button
              onClick={searchProducts}
              disabled={loading}
              style={{
                padding: "0 30px",
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

        <section style={{ marginTop: "30px" }}>
          {results.length === 0 && query && !loading && (
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
                "repeat(auto-fill, minmax(330px, 1fr))",
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
                    fontSize: "14px"
                  }}
                >
                  {product.category}
                </div>

                <h2
                  style={{
                    fontSize: "21px",
                    margin: "8px 0"
                  }}
                >
                  {product.name}
                </h2>

                <p
                  style={{
                    color: "#6b7280",
                    marginBottom: "18px"
                  }}
                >
                  {product.brand} · {product.model}
                </p>

                <div
                  style={{
                    background: "#f3f4f6",
                    borderRadius: "12px",
                    padding: "12px",
                    marginBottom: "18px"
                  }}
                >
                  {Object.entries(product.specs).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "7px"
                        }}
                      >
                        <span>{key}</span>
                        <strong>{value}</strong>
                      </div>
                    )
                  )}
                </div>

                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      marginBottom: "10px"
                    }}
                  >
                    مقارنة الأسعار
                  </div>

                  {product.offers?.map((offer) => (
                    <div
                      key={offer.store}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "11px 0",
                        borderTop: "1px solid #e5e7eb"
                      }}
                    >
                      <span>{offer.store}</span>

                      <strong>
                        {offer.price.toLocaleString("ar-SA")} ريال
                      </strong>
                    </div>
                  ))}
                </div>

                {product.cheapest && (
                  <div
                    style={{
                      marginTop: "15px",
                      padding: "12px",
                      borderRadius: "10px",
                      background: "#ecfdf5",
                      color: "#047857",
                      fontWeight: 700,
                      textAlign: "center"
                    }}
                  >
                    الأرخص: {product.cheapest.store} ·{" "}
                    {product.cheapest.price.toLocaleString("ar-SA")} ريال
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
