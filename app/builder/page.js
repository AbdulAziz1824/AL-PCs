export default function Builder() {
  const parts = [
    "CPU",
    "GPU",
    "Motherboard",
    "RAM",
    "Storage",
    "PSU",
    "Case",
    "Cooler",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h1>بناء تجميعة الكمبيوتر</h1>

      <p>اختر القطع التي تريد إضافتها إلى جهازك.</p>

      <div
        style={{
          display: "grid",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        {parts.map((part) => (
          <div
            key={part}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <strong>{part}</strong>

            <button
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                background: "white",
                cursor: "pointer",
              }}
            >
              اختيار
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
