export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <div>
        <h1 style={{ fontSize: "60px", color: "#39ff88" }}>
          AL PC
        </h1>

        <p style={{ fontSize: "20px", color: "#aaa" }}>
          منصة تجميع أجهزة الكمبيوتر
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "14px 30px",
            border: "none",
            borderRadius: "10px",
            background: "#39ff88",
            color: "#000",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ابدأ تجميع جهازك
        </button>
      </div>
    </main>
  );
}
