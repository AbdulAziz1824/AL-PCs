import Link from "next/link";
import { products } from "@/lib/products";
import { offers } from "@/lib/offers";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return (
      <main dir="rtl" style={{ padding: "60px", textAlign: "center" }}>
        <h1>المنتج غير موجود</h1>
        <Link href="/">العودة للرئيسية</Link>
      </main>
    );
  }

  const productOffers = offers
    .filter(
      (offer) =>
        String(offer.productId) === String(product.id) &&
        offer.available
    )
    .sort((a, b) => a.price - b.price);

  const cheapest = productOffers[0];

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
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#6b7280",
          }}
        >
          ← العودة للرئيسية
        </Link>

        <section
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            marginTop: "25px",
          }}
        >
          <div style={{ color: "#6b7280" }}>
            {product.category}
          </div>

          <h1 style={{ fontSize: "36px", margin: "8px 0" }}>
            {product.name}
          </h1>

          <p style={{ color: "#6b7280" }}>
            {product.brand} · {product.model}
          </p>

          <h2 style={{ marginTop: "35px" }}>
            المواصفات
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
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
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <small style={{ color: "#6b7280" }}>
                    {key}
                  </small>

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
        </section>

        <section
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            marginTop: "20px",
          }}
        >
          <h2>مقارنة الأسعار</h2>

          {productOffers.length === 0 ? (
            <p style={{ color: "#6b7280" }}>
              لا توجد عروض متاحة حاليًا.
            </p>
          ) : (
            <div style={{ marginTop: "20px" }}>
              {productOffers.map((offer) => (
                <div
                  key={offer.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <div>
                    <strong>{offer.store}</strong>

                    {offer.id === cheapest.id && (
                      <span
                        style={{
                          marginRight: "10px",
                          background: "#dcfce7",
                          color: "#15803d",
                          padding: "5px 8px",
                          borderRadius: "6px",
                          fontSize: "12px",
                        }}
                      >
                        أفضل سعر
                      </span>
                    )}
                  </div>

                  <strong style={{ fontSize: "18px" }}>
                    {offer.price.toLocaleString("ar-SA")} ريال
                  </strong>
                </div>
              ))}
            </div>
          )}

          {cheapest && (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                background: "#ecfdf5",
                borderRadius: "12px",
              }}
            >
              <div style={{ color: "#047857" }}>
                أفضل سعر حاليًا
              </div>

              <strong
                style={{
                  display: "block",
                  fontSize: "30px",
                  marginTop: "5px",
                }}
              >
                {cheapest.price.toLocaleString("ar-SA")} ريال
              </strong>

              <div style={{ marginTop: "5px" }}>
                لدى {cheapest.store}
              </div>
            </div>
          )}
        </section>

        <div style={{ marginTop: "20px" }}>
          <Link
            href={`/builder?product=${product.id}`}
            style={{
              display: "block",
              textAlign: "center",
              background: "#111827",
              color: "#fff",
              padding: "16px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            + أضف إلى التجميعة
          </Link>
        </div>
      </div>
    </main>
  );
}
