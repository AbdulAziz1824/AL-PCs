"use client";

import { useState } from "react";
import Link from "next/link";

const parts = [
  { name: "المعالج", icon: "🧠" },
  { name: "كرت الشاشة", icon: "🎮" },
  { name: "اللوحة الأم", icon: "🔧" },
  { name: "الرام", icon: "💾" },
  { name: "التخزين", icon: "💿" },
  { name: "مزود الطاقة", icon: "⚡" },
  { name: "الكيس", icon: "🖥️" },
  { name: "المبرد", icon: "❄️" },
];

export default function Builder() {
  const [selected, setSelected] = useState([]);

  function togglePart(name) {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected([...selected, name]);
    }
  }

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        fontFamily: "Arial",
        paddingBottom: "60px",
      }}
    >
      <nav
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7%",
          borderBottom: "1px solid #222",
          background: "#080808",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#39ff88",
            fontSize: "25px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          AL PC
        </Link>

        <Link
          href="/"
          style={{
            color: "#aaa",
            textDecoration: "none",
          }}
        >
          الرئيسية
        </Link>
      </nav>

      <section
        style={{
          textAlign: "center",
          padding: "70px 20px 40px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "30px",
            background: "#0c2115",
            border: "1px solid #246d40",
            color: "#39ff88",
            fontSize: "13px",
          }}
        >
          PC BUILDER
        </div>

        <h1
          style={{
            fontSize: "55px",
            margin: "20px 0 10px",
          }}
        >
          جمّع جهازك
          <span style={{ color: "#39ff88" }}> بنفسك</span>
        </h1>

        <p
          style={{
            color: "#888",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          اختر مكونات جهازك خطوة بخطوة
          <br />
          وابدأ ببناء تجميعتك.
        </p>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "20px",
          }}
        >
          <div style={{ display: "grid", gap: "12px" }}>
            {parts.map((part) => {
              const active = selected.includes(part.name);

              return (
                <button
                  key={part.name}
                  onClick={() => togglePart(part.name)}
                  style={{
                    width: "100%",
                    padding: "22px",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    textAlign: "right",
                    borderRadius: "14px",
                    border: active
                      ? "1px solid #39ff88"
                      : "1px solid #222",
                    background: active ? "#0b1d12" : "#0c0c0c",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "30px" }}>
                    {part.icon}
                  </span>

                  <span style={{ flex: 1 }}>
                    <strong
                      style={{
                        display: "block",
                        fontSize: "18px",
                        marginBottom: "6px",
                      }}
                    >
                      {part.name}
                    </strong>

                    <small
                      style={{
                        color: active ? "#39ff88" : "#777",
                      }}
                    >
                      {active
                        ? "تم الاختيار ✓"
                        : "اضغط لاختيار القطعة"}
                    </small>
                  </span>

                  <span style={{ color: "#555" }}>←</span>
                </button>
              );
            })}
          </div>

          <aside
            style={{
              height: "fit-content",
              padding: "25px",
              borderRadius: "15px",
              border: "1px solid #222",
              background: "#0b0b0b",
              position: "sticky",
              top: "20px",
            }}
          >
            <h2 style={{ marginTop: 0 }}>تجميعتك</h2>

            <div
              style={{
                fontSize: "55px",
                fontWeight: "bold",
                color: "#39ff88",
              }}
            >
              {selected.length}
              <span
                style={{
                  fontSize: "20px",
                  color: "#555",
                }}
              >
                {" "}
                / 8
              </span>
            </div>

            <p style={{ color: "#777" }}>
              قطع تم اختيارها
            </p>

            <div
              style={{
                height: "8px",
                background: "#222",
                borderRadius: "10px",
                overflow: "hidden",
                margin: "20px 0",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${(selected.length / 8) * 100}%`,
                  background: "#39ff88",
                  transition: "0.3s",
                }}
              />
            </div>

            <div
              style={{
                padding: "15px",
                background: "#111",
                borderRadius: "10px",
                color: "#aaa",
                marginBottom: "20px",
              }}
            >
              {selected.length === 0
                ? "ابدأ باختيار مكونات جهازك."
                : selected.length === 8
                ? "اكتملت التجميعة 🎉"
                : `اخترت ${selected.length} من 8 قطع.`}
            </div>

            <button
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "10px",
                background: "#39ff88",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              متابعة التجميع
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}
