import Link from "next/link";
import { products } from "@/lib/products";

export default async function ProductPage({ params }) {
  const paramsData = await params;
  const id = String(paramsData.id);

  const product = products.find(
    (item) => String(item.id) === id
  );

  if (!product) {
    return (
      <main
        dir="rtl"
        style={{
          minHeight: "100vh",
          background: "#f5f6f8",
          padding: "60px 20px",
          color: "#111827",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "#fff",
            padding: "30px",
            borderRadius: "18px",
          }}
        >
          <h1>المنتج غير موجود</h1>

          <p>
            الـ ID المطلوب:
            <strong> {id}</strong>
          </p>

          <hr />

          <h3>المنتجات الموجودة حاليًا:</h3>

          {products.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "12px",
                marginTop: "8px",
                background: "#f3f4f6",
                borderRadius: "8px",
              }}
            >
              ID: <strong>{String(item.id)}</strong>
              {" — "}
              {item.name}
            </div>
          ))}

          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: "20px",
            }}
          >
            العودة للرئيسية
          </Link>
        </div>
      </main>
    );
  }

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
          maxWidth: "1000px",
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
          ← العودة للرئيسية
        </Link>

        <section
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "35px",
            marginTop: "25px",
          }}
        >
          <div style={{ color: "#6b7280" }}>
            {product.category}
          </div>

          <h1
            style={{
              fontSize: "36px",
              margin: "10px 0",
            }}
          >
            {product.name}
          </h1>

          <p style={{ color: "#6b7280" }}>
            {product.brand} · {product.model}
          </p>

          <div
            style={{
              fontSize: "30px",
              fontWeight: 800,
              marginTop: "25px",
            }}
          >
            {product.price?.toLocaleString("ar-SA")} ريال
          </div>

          <h2 style={{ marginTop: "35px" }}>
            المواصفات
          </h2>

          <div>
            {Object.entries(product).map(([key, value]) => {
              if (
                [
                  "id",
                  "name",
                  "category",
                  "brand",
                  "model",
                  "price",
                ].includes(key)
              ) {
                return null;
              }

              return (
                <div
                  key={key}
                  style={{
                    padding: "14px 0",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <strong>{key}: </strong>

                  {typeof value === "object"
                    ? JSON.stringify(value)
                    : String(value)}
                </div>
              );
            })}
          </div>

          <Link
            href={`/builder?product=${product.id}`}
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "30px",
              padding: "16px",
              background: "#111827",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            + أضف إلى التجميعة
          </Link>
        </section>
      </div>
    </main>
  );
}
