"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07090d",
        color: "white",
        fontFamily: "Arial, sans-serif",
        direction: "rtl",
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid #1d222b",
          padding: "20px 6%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "25px", fontWeight: "bold" }}>
            PC<span style={{ color: "#22c55e" }}>Scout</span>
          </div>

          <nav style={{ display: "flex", gap: "30px", color: "#9ca3af" }}>
            <span>الرئيسية</span>
            <span>القطع</span>
            <span>التجميعات</span>
            <span>مقارنة الأسعار</span>
          </nav>

          <button
            style={{
              background: "#11151c",
              color: "white",
              border: "1px solid #252b35",
              borderRadius: "10px",
              padding: "10px 18px",
            }}
          >
            تسجيل الدخول
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#0c2517",
            color: "#4ade80",
            border: "1px solid #164b2a",
            borderRadius: "30px",
            padding: "9px 18px",
            marginBottom: "25px",
          }}
        >
          🤖 مدعوم بالذكاء الاصطناعي
        </div>

        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            lineHeight: "1.15",
            margin: "0",
            fontWeight: "800",
          }}
        >
          ابحث عن قطع الكمبيوتر
          <br />
          <span style={{ color: "#22c55e" }}>بأذكى طريقة</span>
        </h1>

        <p
          style={{
            color: "#8b929e",
            fontSize: "18px",
            lineHeight: "2",
            maxWidth: "650px",
            margin: "25px auto",
          }}
        >
          اكتب القطعة التي تبحث عنها، ودع PCScout يقارن لك
          الأسعار من المتاجر المختلفة ويجد أفضل صفقة.
        </p>

        {/* Search */}
        <div
          style={{
            maxWidth: "750px",
            margin: "40px auto 0",
            display: "flex",
            gap: "10px",
            background: "#0d1117",
            border: "1px solid #252b35",
            padding: "10px",
            borderRadius: "18px",
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="مثال: RTX 5070 بأقل سعر"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "16px",
              padding: "15px",
              textAlign: "right",
            }}
          />

          <button
            onClick={() => alert(`بحث عن: ${search || "قطعة كمبيوتر"}`)}
            style={{
              background: "#22c55e",
              color: "#031008",
              border: "none",
              borderRadius: "12px",
              padding: "0 25px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🔍 بحث
          </button>
        </div>

        <p style={{ color: "#555d68", marginTop: "15px" }}>
          جرّب: "أبغى تجميعة ألعاب بـ 5000 ريال"
        </p>
      </section>

      {/* Stores */}
      <section
        style={{
          borderTop: "1px solid #1d222b",
          borderBottom: "1px solid #1d222b",
          background: "#090c11",
          padding: "55px 20px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#666e7a",
            marginBottom: "30px",
          }}
        >
          مقارنة الأسعار من المتاجر
        </p>

        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
          }}
        >
          <Store name="Amazon.sa" icon="📦" />
          <Store name="Noon" icon="🟡" />
          <Store name="Trendyol" icon="🟠" />
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "auto",
          padding: "90px 20px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "34px" }}>
          ليش PCScout؟
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "45px",
          }}
        >
          <Feature
            icon="💰"
            title="مقارنة الأسعار"
            text="قارن أسعار القطعة بين المتاجر المختلفة."
          />

          <Feature
            icon="🤖"
            title="ذكاء اصطناعي"
            text="اكتب طلبك بطريقتك والذكاء الاصطناعي يفهم احتياجك."
          />

          <Feature
            icon="🏆"
            title="أفضل صفقة"
            text="نساعدك في معرفة أفضل قطعة مقابل السعر."
          />
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1d222b",
          textAlign: "center",
          padding: "30px",
          color: "#555d68",
        }}
      >
        PCScout © 2026
      </footer>
    </main>
  );
}

function Store({ name, icon }) {
  return (
    <div
      style={{
        background: "#0d1117",
        border: "1px solid #202630",
        borderRadius: "15px",
        padding: "25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "25px" }}>{icon}</span>
      <strong>{name}</strong>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div
      style={{
        background: "#0d1117",
        border: "1px solid #202630",
        borderRadius: "18px",
        padding: "30px",
      }}
    >
      <div style={{ fontSize: "35px" }}>{icon}</div>

      <h3 style={{ fontSize: "21px", marginTop: "20px" }}>
        {title}
      </h3>

      <p style={{ color: "#737b87", lineHeight: "1.9" }}>
        {text}
      </p>
    </div>
  );
}
