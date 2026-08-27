"use client";

import { useState } from "react";

const parts = {
  CPU: [
    { name: "AMD Ryzen 7 7800X3D", price: 1299 },
    { name: "AMD Ryzen 5 7600X", price: 799 },
  ],
  GPU: [
    { name: "NVIDIA RTX 5070", price: 2399 },
    { name: "AMD Radeon RX 7800 XT", price: 1899 },
  ],
  RAM: [
    { name: "Kingston Fury Beast 32GB DDR5", price: 399 },
    { name: "Corsair Vengeance 32GB DDR5", price: 429 },
  ],
  Storage: [
    { name: "Samsung 990 EVO 1TB", price: 329 },
    { name: "WD Black SN850X 1TB", price: 349 },
  ],
};

export default function Builder() {
  const [selected, setSelected] = useState({});

  const total = Object.values(selected).reduce(
    (sum, part) => sum + part.price,
    0
  );

  function selectPart(category, index) {
    const part = parts[category][index];

    setSelected((current) => ({
      ...current,
      [category]: part,
    }));
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
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h1 style={{ fontSize: "38px", marginBottom: "8px" }}>
          PC Builder
        </h1>

        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          اختر القطع وابنِ جهازك
        </p>

        <section
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {Object.entries(parts).map(([category, items]) => (
            <div
              key={category}
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "18px",
              }}
            >
              <h2 style={{ marginTop: 0 }}>{category}</h2>

              <select
                value={
                  selected[category]
                    ? items.findIndex(
                        (item) =>
                          item.name === selected[category].name
                      )
                    : ""
                }
                onChange={(e) =>
                  selectPart(category, Number(e.target.value))
                }
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px",
                  fontSize: "16px",
                  background: "#fff",
                }}
              >
                <option value="">اختر قطعة</option>

                {items.map((item, index) => (
                  <option key={item.name} value={index}>
                    {item.name} -{" "}
                    {item.price.toLocaleString("ar-SA")} ريال
                  </option>
                ))}
              </select>
            </div>
          ))}
        </section>

        <section
          style={{
            marginTop: "25px",
            background: "#111827",
            color: "#fff",
            borderRadius: "18px",
            padding: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>إجمالي التجميعة</span>

          <strong style={{ fontSize: "28px" }}>
            {total.toLocaleString("ar-SA")} ريال
          </strong>
        </section>
      </div>
    </main>
  );
}
