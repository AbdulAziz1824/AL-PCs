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
      <main
        dir="rtl"
        style={{
          minHeight: "100vh",
          background: "#f5f6f8",
          padding: "60px 20px",
          textAlign: "center",
          color: "#111827",
        }}
      >
        <h1>المنتج غير موجود</h1>

        <p style={{ color: "#6b7280" }}>
          لم يتم العثور على المنتج المطلوب.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "#111827",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          العودة للرئيسية
        </Link>
      </main>
    );
  }

  const productOffers = offers
    .filter(
      (offer) =>
        String(offer.productId) === String(product.id) &&
        offer.available === true
    )
    .sort((a, b) => a.price - b.price);

  const cheapest = productOffers[0] || null;

  const specifications = Object.entries(product)
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
      .filter(
        ([, value]) =>
          value !== null &&
          value !== undefined &&
          typeof value !== "object"
      );

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        color: "#111827",
        padding: "40px 20px 60px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#6b7280",
            textDecoration: "none",
          }}
        >
          ← العودة للرئيسية
        </Link>

        <section
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "32px",
            marginTop: "25px",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              color: "#6b7280",
              fontSize: "14px",
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

          <p
            style={{
              color: "#6b7280",
              margin: 0,
            }}
          >
            {product.brand} · {product.model}
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
            }}
          >
            {specifications.map(([key, value]) => (
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
                    marginTop: "6px",
                    fontSize: "16px",
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
            padding: "32px",
            marginTop: "20px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            مقارنة الأسعار
          </h2>

          {productOffers.length === 0 ? (
            <p style={{ color: "#6b7280" }}>
              لا توجد عروض متاحة حاليًا.
            </p>
          ) : (
            <div
              style={{
                marginTop: "20px",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              {productOffers.map((offer, index) => (
                <div
                  key={offer.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 20px",
                    borderTop:
                      index === 0
                        ? "none"
                        : "1px solid #e5e7eb",
                  }}
                >
                  <div>
                    <strong>{offer.store}</strong>

                    {offer.id === cheapest.id && (
                      <span
                        style={{
                          display: "inline-block",
                          marginRight: "10px",
                          background: "#dcfce7",
                          color: "#15803d",
                          padding: "5px 9px",
                          borderRadius: "6px",
                          fontSize: "12px",
                        }}
                      >
                        الأرخص
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
                color: "#047857",
                borderRadius: "12px",
              }}
            >
              <div>أفضل سعر حاليًا</div>

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

        <Link
          href={`/builder?product=${product.id}`}
          style={{
            display: "block",
            marginTop: "20px",
            padding: "17px",
            textAlign: "center",
            background: "#111827",
            color: "#fff",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          + أضف إلى التجميعة
        </Link>
      </div>
    </main>
  );
}
