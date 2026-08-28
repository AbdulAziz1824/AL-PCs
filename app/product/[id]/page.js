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
          color: "#111827",
          textAlign: "center",
        }}
      >
        <h1>المنتج غير موجود</h1>

        <p style={{ color: "#6b7280" }}>
          ID المطلوب: {id}
        </p>

        <Link href="/">
          العودة للرئيسية
        </Link>
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

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "35px",
            marginTop: "25px",
            border: "1px solid #e5e7eb",
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
              marginTop: "25px",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            {product.price?.toLocaleString("ar-SA")} ريال
          </div>

          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#f3f4f6",
              borderRadius: "12px",
            }}
          >
            <h2>المواصفات</h2>

            {Object.entries(product).map(([key, value]) => {
              if (
                ["id", "name", "category", "brand", "model", "price"].includes(
                  key
                )
              ) {
                return null;
              }

              return (
                <div
                  key={key}
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid #ddd",
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
              marginTop: "25px",
              padding: "15px",
              background: "#111827",
              color: "#fff",
              borderRadius: "10px",
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
