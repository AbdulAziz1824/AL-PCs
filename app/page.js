export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
        AL-PCs
      </h1>

      <p style={{ fontSize: "22px", marginBottom: "40px" }}>
        ابنِ جهازك المثالي بأفضل سعر
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            padding: "18px 35px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          🖥️ ابدأ بناء التجميعة
        </button>

        <button
          style={{
            padding: "18px 35px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
          }}
        >
          💰 مقارنة الأسعار
        </button>

        <button
          style={{
            padding: "18px 35px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
          }}
        >
          🤖 مساعد AI
        </button>
      </div>
    </main>
  );
}
