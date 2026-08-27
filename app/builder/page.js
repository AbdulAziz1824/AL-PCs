"use client";

import { useState } from "react";

const parts = [
  { category: "CPU", name: "AMD Ryzen 7 7800X3D", price: 1299 },
  { category: "GPU", name: "NVIDIA RTX 5070", price: 2399 },
  { category: "RAM", name: "Kingston Fury Beast 32GB DDR5", price: 399 },
  { category: "Storage", name: "Samsung 990 EVO 1TB", price: 329 },
];

export default function Builder() {
  const [selected, setSelected] = useState({});

  const total = Object.values(selected).reduce(
    (sum, part) => sum + part.price,
    0
  );

  function choosePart(part) {
    setSelected((current) => ({
      ...current,
      [part.category]: part,
    }));
  }

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h1 style={{ fontSize: "38px", marginBottom: "8px" }}>
          PC Builder
        </h1>

        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          اختر قطع جهازك وشاهد السعر الإجمالي مباشرة
        </p>

        <section
          style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "25px",
            marginBottom: "25px",
          }}
        >
          {parts.map((part) => (
            <div
              key={part.category}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <div>
                <strong>{part.category}</strong>
                <div style={{ color: "#6b7280", marginTop: "5px" }}>
                  {selected[part.category]?.name || "لم يتم الاختيار"}
                </div>
              </div>

              <button
                onClick={() => choosePart(part)}
                style={{
                  background: "#111827",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px 18px",
                  cursor: "pointer",
                }}
              >
                اختيار
              </button>
            </div>
          ))}
        </section>

        <section
          style={{
            background: "#111827",
            color: "#fff",
            borderRadius: "18px",
            padding: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong>الإجمالي</strong>

          <strong style={{ fontSize: "28px" }}>
            {total.toLocaleString("ar-SA")} ريال
          </strong>
        </section>
      </div>
    </main>
  );
}
