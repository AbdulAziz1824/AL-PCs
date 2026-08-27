"use client";

import { useState } from "react";

export default function Builder() {
  const parts = [
    {
      name: "CPU",
      description: "المعالج",
      icon: "⚡",
    },
    {
      name: "GPU",
      description: "كرت الشاشة",
      icon: "🎮",
    },
    {
      name: "Motherboard",
      description: "اللوحة الأم",
      icon: "🧩",
    },
    {
      name: "RAM",
      description: "الذاكرة",
      icon: "💾",
    },
    {
      name: "Storage",
      description: "التخزين",
      icon: "📦",
    },
    {
      name: "PSU",
      description: "مزود الطاقة",
      icon: "🔌",
    },
    {
      name: "Case",
      description: "الكيس",
      icon: "🖥️",
    },
    {
      name: "Cooler",
      description: "التبريد",
      icon: "❄️",
    },
  ];

  const cpus = [
    { name: "AMD Ryzen 5 5600", price: 399 },
    { name: "AMD Ryzen 5 5600X", price: 449 },
    { name: "AMD Ryzen 5 7600", price: 699 },
    { name: "AMD Ryzen 7 7700", price: 999 },
    { name: "AMD Ryzen 7 7800X3D", price: 1399 },
    { name: "Intel Core i5-14400F", price: 599 },
    { name: "Intel Core i5-14600K", price: 899 },
    { name: "Intel Core i7-14700K", price: 1299 },
  ];

  const [selected, setSelected] = useState({});
  const [showCpu, setShowCpu] = useState(false);

  function choosePart(part) {
    if (part.name === "CPU") {
      setShowCpu(!showCpu);
      return;
    }

    setSelected({
      ...selected,
      [part.name]: part.name,
    });
  }

  function chooseCpu(cpu) {
    setSelected({
      ...selected,
      CPU: cpu,
    });

    setShowCpu(false);
  }

  const totalPrice = Object.values(selected).reduce(
    (total, part) => total + (part.price || 0),
    0
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
        direction: "rtl",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            بناء تجميعة الكمبيوتر
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "18px",
            }}
          >
            اختر مكونات جهازك وابنِ تجميعتك بسهولة
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {parts.map((part) => {
            const isSelected = selected[part.name];

            return (
              <div key={part.name}>
                <div
                  style={{
                    background: "white",
                    border: isSelected
                      ? "2px solid #2563eb"
                      : "1px solid #e5e7eb",
                    borderRadius: "18px",
                    padding: "25px",
                    boxShadow:
                      "0 5px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "35px",
                      marginBottom: "15px",
                    }}
                  >
                    {part.icon}
                  </div>

                  <h2
                    style={{
                      margin: "0 0 8px",
                      color: "#111827",
                    }}
                  >
                    {part.name}
                  </h2>

                  <p
                    style={{
                      color: "#6b7280",
                      marginBottom: "20px",
                    }}
                  >
                    {isSelected && part.name === "CPU"
                      ? isSelected.name
                      : part.description}
                  </p>

                  <button
                    onClick={() => choosePart(part)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "10px",
                      border: "none",
                      background: isSelected
                        ? "#16a34a"
                        : "#2563eb",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {isSelected
                      ? "تغيير الاختيار"
                      : "اختيار"}
                  </button>
                </div>

                {part.name === "CPU" && showCpu && (
                  <div
                    style={{
                      marginTop: "10px",
                      background: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "15px",
                      padding: "15px",
                      boxShadow:
                        "0 5px 20px rgba(0,0,0,0.08)",
                    }}
                  >
                    {cpus.map((cpu) => (
                      <button
                        key={cpu.name}
                        onClick={() => chooseCpu(cpu)}
                        style={{
                          width: "100%",
                          padding: "14px",
                          marginBottom: "8px",
                          borderRadius: "10px",
                          border:
                            "1px solid #e5e7eb",
                          background: "#f9fafb",
                          cursor: "pointer",
                          textAlign: "right",
                        }}
                      >
                        <strong>{cpu.name}</strong>

                        <div
                          style={{
                            marginTop: "5px",
                            color: "#2563eb",
                          }}
                        >
                          {cpu.price} ريال
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "35px",
            padding: "25px",
            background: "white",
            borderRadius: "18px",
            border: "1px solid #e5e7eb",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#111827" }}>
            ملخص التجميعة
          </h2>

          <p style={{ color: "#6b7280" }}>
            تم اختيار {Object.keys(selected).length} من{" "}
            {parts.length} مكونات
          </p>

          <h2
            style={{
              marginTop: "20px",
              color: "#2563eb",
            }}
          >
            السعر الإجمالي: {totalPrice} ريال
          </h2>
        </div>
      </div>
    </main>
  );
}
