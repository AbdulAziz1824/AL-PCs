import Link from "next/link";
import { products } from "@/lib/products";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return (
      <main
        dir="rtl"
        style={{
          minHeight: "100vh",
          background: "#f5f6f8",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1>المنتج غير موجود</h1>

        <Link href="/">
          العودة للرئيسية
        </Link>
      </main>
    );
  }

  const offers = [
    {
      store: "Amazon",
      price: product.price,
      available: true,
    },
    {
      store: "Noon",
      price: product.price + 80,
      available: true,
    },
    {
      store: "متجر آخر",
      price: product.price + 150,
      available: true,
    },
  ];

  const cheapest = [...offers].sort(
    (a, b) => a.price - b.price
  )[0];

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        padding: "40px 20px",
        color: "#111827",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#6b7280",
            textDecoration: "none",
          }}
        >
          ← العودة للبحث
        </Link>

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              color: "#6b7280",
              marginBottom: "8px",
            }}
          >
            {product.category}
          </div>

          <h1
            style={{
              fontSize: "36px",
              margin: "0 0 10px",
            }}
          >
            {product.name}
          </h1>

          <p style={{ color: "#6b7280" }}>
            {product.brand} · {product.model}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            {Object.entries(product)
              .filter(
                ([key]) =>
                  ![
                    "id",
                    "name",
                    "category",
                    "brand",
                    "model",
                    "price",
                  ].includes(key)
              )
              .map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    background: "#f3f4f6",
                    padding: "18px",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "13px",
                    }}
                  >
                    {key}
                  </div>

                  <strong
                    style={{
                      display: "block",
                      marginTop: "5px",
                    }}
                  >
                    {String(value)}
                  </strong>
                </div>
              ))}
          </div>
        </div>

        <section
          style={{
            marginTop: "25px",
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <h2>مقارنة الأسعار</h2>

          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              overflow: "hidden",
              marginTop: "20px",
            }}
          >
            {offers.map((offer, index) => (
              <div
                key={offer.store}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px",
                  borderTop:
                    index === 0
                      ? "none"
                      : "1px solid #e5e7eb",
                }}
              >
                <div>
                  <strong>{offer.store}</strong>

                  {offer.price === cheapest.price && (
                    <span
                      style={{
                        marginRight: "10px",
                        background: "#dcfce7",
                        color: "#15803d",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "12px",
                      }}
                    >
                      الأرخص
                    </span>
                  )}
                </div>

                <strong>
                  {offer.price.toLocaleString("ar-SA")} ريال
                </strong>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "18px",
              background: "#ecfdf5",
              color: "#047857",
              borderRadius: "12px",
              fontWeight: 700,
            }}
          >
            أفضل سعر حاليًا:{" "}
            {cheapest.price.toLocaleString("ar-SA")} ريال
          </div>
        </section>
      </div>
    </main>
  );
}
