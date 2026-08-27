"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          height: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7%",
          borderBottom: "1px solid #151515",
          background: "#080808",
        }}
      >
        <div
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            color: "#39ff88",
          }}
        >
          AL PC
        </div>

        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Link href="/" style={navLink}>
            الرئيسية
          </Link>

          <Link href="/builder" style={navLink}>
            تجميع جهاز
          </Link>

          <a href="#features" style={navLink}>
            المميزات
          </a>
        </div>

        <Link href="/builder" style={buttonStyle}>
          ابدأ الآن
        </Link>
      </nav>

      {/* Hero */}
      <section
        style={{
          minHeight: "650px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 20px",
          background:
            "radial-gradient(circle at center, #123d25 0%, #080808 45%, #050505 75%)",
        }}
      >
        <div style={{ maxWidth: "850px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "30px",
              background: "#0d2117",
              border: "1px solid #1d713f",
              color: "#39ff88",
              marginBottom: "25px",
              fontSize: "14px",
            }}
          >
            ⚡ ابنِ جهازك المثالي
          </div>

          <h1
            style={{
              fontSize: "clamp(45px, 7vw, 82px)",
              lineHeight: "1.1",
              margin: "0",
              fontWeight: "900",
            }}
          >
            جمّع جهازك
            <br />
            <span style={{ color: "#39ff88" }}>بكل سهولة</span>
          </h1>

          <p
            style={{
              color: "#aaa",
              fontSize: "20px",
              lineHeight: "1.8",
              margin: "30px auto",
              maxWidth: "650px",
            }}
          >
            اختر القطع المناسبة لك، وتأكد من توافقها، واحصل على تجميعة تناسب
            استخدامك وميزانيتك.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/builder"
              style={{
                ...buttonStyle,
                padding: "16px 35px",
                fontSize: "17px",
                boxShadow: "0 0 30px rgba(57,255,136,.2)",
              }}
            >
              ابدأ تجميع جهازك →
            </Link>

            <a
              href="#features"
              style={{
                padding: "16px 35px",
                borderRadius: "10px",
                border: "1px solid #333",
                color: "white",
                textDecoration: "none",
                fontSize: "17px",
              }}
            >
              اكتشف المميزات
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        style={{
          padding: "90px 7%",
          background: "#080808",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "55px" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "15px" }}>
            كل شيء تحتاجه
          </h2>

          <p style={{ color: "#888", fontSize: "18px" }}>
            أدوات بسيطة تساعدك في بناء جهازك المثالي
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >
          <Feature
            icon="🧩"
            title="توافق القطع"
            text="تأكد من توافق مكونات جهازك قبل الشراء."
          />

          <Feature
            icon="💰"
            title="تحكم بالميزانية"
            text="كوّن جهازك حسب ميزانيتك بدون تعقيد."
          />

          <Feature
            icon="⚡"
            title="أداء قوي"
            text="اختر القطع التي تعطيك أفضل أداء مقابل السعر."
          />

          <Feature
            icon="🎮"
            title="للألعاب"
            text="تجميعات مناسبة للألعاب والاستخدامات المختلفة."
          />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, #080808 0%, #0d2417 100%)",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "15px" }}>
          جاهز تبني جهازك؟
        </h2>

        <p style={{ color: "#999", fontSize: "18px", marginBottom: "30px" }}>
          ابدأ الآن واختر قطع جهازك خطوة بخطوة.
        </p>

        <Link
          href="/builder"
          style={{
            ...buttonStyle,
            display: "inline-block",
            padding: "16px 40px",
            fontSize: "18px",
          }}
        >
          ابدأ الآن
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "30px 7%",
          borderTop: "1px solid #171717",
          color: "#666",
          textAlign: "center",
          background: "#050505",
        }}
      >
        © 2026 AL PC - جميع الحقوق محفوظة
      </footer>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div
      style={{
        padding: "30px",
        borderRadius: "15px",
        border: "1px solid #1b1b1b",
        background: "#0d0d0d",
        textAlign: "center",
        transition: "0.2s",
      }}
    >
      <div style={{ fontSize: "38px", marginBottom: "15px" }}>{icon}</div>

      <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>{title}</h3>

      <p
        style={{
          color: "#888",
          lineHeight: "1.7",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

const navLink = {
  color: "#aaa",
  textDecoration: "none",
  fontSize: "15px",
};

const buttonStyle = {
  color: "#000",
  background: "#39ff88",
  textDecoration: "none",
  padding: "11px 22px",
  borderRadius: "9px",
  fontWeight: "bold",
};
